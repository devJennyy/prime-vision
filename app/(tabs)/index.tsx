import HeroCarousel from "@/components/HeroCarousel";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../globals.css";

export default function Index() {
  const router = useRouter();

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
    <SafeAreaView className="relative flex-1 bg-primary">
      <Image
        source={require("../../assets/images/ellipsis.png")}
        className="w-full h-1/2 absolute top-0"
      />
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <View className="w-full flex flex-col items-center gap-5 mt-2 px-5">
          <View className="w-52 h-14">
            <Image
              source={require("../../assets/images/logo.png")}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>

          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="What are you looking for?"
          />
        </View>

        <HeroCarousel />

        <View className="w-full flex flex-col gap-5 px-5 mt-8">
          {moviesError ? (
            <Text className="text-red-500">Error: {moviesError.message}</Text>
          ) : (
            <View className="flex flex-col gap-5">
              <Text className="text-xl font-bold text-white">For you</Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} horizontal />}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4" />}
                className="mb-4"
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
