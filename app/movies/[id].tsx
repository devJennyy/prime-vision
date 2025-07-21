import ToggleIconButton from "@/components/ui/ToggleIconButton";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const MovieDetails = () => {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full h-[220px] bg-accent" />

        <View className="flex flex-col gap-1 my-3">
          <Text className="text-xl font-bold text-white">The Wild Robot</Text>
          <Text className="text-white mb-2">2024</Text>
        </View>

        <View className="flex flex-col gap-[9px]">
          <TouchableOpacity className="py-3 w-full h-fit rounded-md bg-accent flex flex-row justify-center items-center gap-3">
            <Image
              source={require("../../assets/icons/play.png")}
              className="w-4 h-4"
              resizeMode="contain"
            />
            <Text className="text-white font-bold">Watch Trailer</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 w-full h-fit rounded-md border border-accent flex flex-row justify-center items-center gap-3">
            <Image
              source={require("../../assets/icons/plus.png")}
              className="w-4 h-4"
              resizeMode="contain"
            />
            <Text className="text-white font-bold">My List</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col gap-2 mt-5">
          <Text className="font-bold text-white text-base">
            S2:E32 The Empress Dowager
          </Text>
          <Text className="text-white leading-5 text-sm font-medium">
            The epic adventure follows the journey of a robot--ROZZUM unit 7134
            for short that is shipwrecked on an uninhabited island shipwrecked
            on an uninhabited island
          </Text>
          <View>
            <Text className="text-muted/60 text-sm">
              Cast: Lupita Nyong’o, Pedro Pascual ... more
            </Text>
            <Text className="text-muted/60 text-sm">
              Director: Lupita Nyong’o, Pedro Pascual ... more
            </Text>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mt-10 mb-5 gap-12">
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

        {/* {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#8486ED"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text className="text-white mt-4">Error: {moviesError.message}</Text>
        ) : (
          <View className="mt-5">
            <Text className="text-xl font-bold text-muted/80 mb-5">
              More Like This
            </Text>
            <View className="flex flex-row flex-wrap justify-start gap-x-3 gap-y-5">
              {movies.slice(0, 9).map((movie: any) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </View>
          </View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
