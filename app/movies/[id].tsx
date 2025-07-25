import MovieCard from "@/components/MovieCard";
import ToggleIconButton from "@/components/ui/ToggleIconButton";
import YouTubePlayer from "@/components/VideoCard";
import {
  fetchMovieDetails,
  fetchMovies,
  fetchMovieTrailer,
} from "@/services/api";
import useFetch from "@/services/useFetch";
import { useLocalSearchParams, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MovieDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [trailerObj, setTrailerObj] = useState<any>(null);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);

  const {
    data: movies,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  const {
    data: movieDetails,
  } = useFetch(() => {
    if (!id) return Promise.reject(new Error("No movie id provided"));
    return fetchMovieDetails(id);
  });

  const {
    data: movieTrailer,
    loading: trailerLoading,
  } = useFetch(() => {
    if (!id) return Promise.reject(new Error("No movie id provided"));
    return fetchMovieTrailer(id);
  });

  useEffect(() => {
    if (!trailerLoading && movieTrailer) {
      const trailer = movieTrailer.results.find(
        (res: any) =>
          res?.type === "Trailer" && res?.name === "Official Trailer"
      );
      setTrailerObj(trailer);
    }
  }, [movieTrailer, trailerLoading]);

  const renderHeader = () => (
    <View className="pt-3 pb-5">
      <View className="absolute top-5 right-4 z-50">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-[10px] rounded-full bg-black/50"
        >
          <Image
            source={require("../../assets/icons/close.png")}
            className="w-[14px] h-[14px]"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {trailerObj ? (
        <YouTubePlayer videoId={trailerObj?.key} autoPlay={isTrailerPlaying} />
      ) : (
        <LottieView
          source={require("../../assets/animations/404-error.json")}
          autoPlay
          loop
          style={{ width: 400, height: 219 }}
        />
      )}

      <View className="flex flex-col gap-[6px] my-[14px] px-4">
        <Text className="text-xl font-bold text-white">
          {movieDetails?.title}
        </Text>
        <View className="flex-row items-center gap-x-1">
          <Text className="text-white text-sm">
            {movieDetails?.release_date?.split("-")[0]} •
          </Text>
          <Text className="text-white text-sm">{movieDetails?.runtime}m</Text>
        </View>
      </View>

      <View className="flex flex-col gap-[9px] px-4">
        <View className="flex flex-col gap-[9px]">
          <TouchableOpacity
            onPress={() => setIsTrailerPlaying((prev) => !prev)}
            className="py-[14px] w-full rounded-md bg-accent flex flex-row justify-center items-center gap-3"
          >
            <Image
              source={
                isTrailerPlaying
                  ? require("../../assets/icons/pause.png")
                  : require("../../assets/icons/play.png")
              }
              className="w-4 h-4"
              resizeMode="contain"
            />
            <Text className="text-white font-bold">
              {isTrailerPlaying ? "Playing" : "Play Trailer"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="py-[14px] w-full rounded-md border border-accent flex flex-row justify-center items-center gap-3">
          <Image
            source={require("../../assets/icons/plus.png")}
            className="w-4 h-4"
            resizeMode="contain"
          />
          <Text className="text-white font-bold">My List</Text>
        </TouchableOpacity>
      </View>

      <View className="flex flex-col gap-2 mt-5 px-4">
        <Text className="font-bold text-white text-base">
          {movieDetails?.original_title}
        </Text>
        <Text className="text-white leading-5 text-sm font-medium">
          {movieDetails?.overview}
        </Text>

        <Text className="text-muted/60 leading-5 text-sm font-medium">
          Genres:{" "}
          {movieDetails?.genres
            ?.slice(0, 2)
            .map((g: any) => g.name)
            .join(", ")}
        </Text>
      </View>

      <View className="flex flex-row justify-between items-center mt-10 gap-12 px-4">
        <View className="flex-1 border-b-4 border-accent pb-4">
          <ToggleIconButton
            firstIcon={require("../../assets/icons/plus.png")}
            secondIcon={require("../../assets/icons/check.png")}
            label="My List"
          />
        </View>
        <View className="flex-1 border-b-4 border-transparent pb-4">
          <ToggleIconButton
            firstIcon={require("../../assets/icons/like.png")}
            secondIcon={require("../../assets/icons/liked.png")}
            label="Rate"
          />
        </View>
        <View className="flex-1 border-b-4 border-transparent pb-4">
          <ToggleIconButton
            firstIcon={require("../../assets/icons/share.png")}
            secondIcon={require("../../assets/icons/shared.png")}
            label="Share"
          />
        </View>
      </View>

      {moviesError && (
        <Text className="text-red-500 mb-4 px-4">
          Error: {moviesError.message}
        </Text>
      )}

      <Text className="text-lg font-bold text-white mt-8 px-4">
        More Like This
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="bg-primary flex-1">
      <FlatList
        data={(movies || []).slice(0, 9)}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 10,
          paddingHorizontal: 15,
          marginBottom: 10,
        }}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MovieDetails;
