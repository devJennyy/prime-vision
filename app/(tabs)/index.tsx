import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
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

          <View className="w-full flex flex-col gap-10 mb-10 mt-[-5px]">
            <View className="relative w-full flex flex-row justify-center items-center">
              <Image
                source={require("../../assets/images/poster3.png")}
                className="absolute w-[119px] h-[153px] z-30 left-0"
                resizeMode="cover"
              />

              <Image
                source={require("../../assets/images/poster4.png")}
                className="absolute w-[163px] h-[238px] z-40 left-10"
                resizeMode="cover"
              />

              <Image
                source={require("../../assets/images/poster1.png")}
                className="w-[214px] h-[316px] z-50"
                resizeMode="cover"
              />

              <Image
                source={require("../../assets/images/poster2.png")}
                className="absolute w-[163px] h-[238px] z-40 right-10"
                resizeMode="cover"
              />

              <Image
                source={require("../../assets/images/poster5.png")}
                className="absolute w-[119px] h-[153px] z-30 right-0"
                resizeMode="cover"
              />
            </View>
          </View>

          {moviesLoading ? (
            <ActivityIndicator
              size="large"
              color="#8486ED"
              className="mt-10 self-center"
            />
          ) : moviesError ? (
            <Text> Error: {moviesError?.message} </Text>
          ) : (
            <View className="flex-1">
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
            </View>
          )}

          {moviesLoading ? (
            <ActivityIndicator
              size="large"
              color="#8486ED"
              className="mt-10 self-center"
            />
          ) : moviesError ? (
            <Text> Error: {moviesError?.message} </Text>
          ) : (
            <View className="flex-1">
              <View className="flex flex-col gap-5">
                <Text className="text-xl font-bold text-white">Popular</Text>

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
            </View>
          )}

          {moviesLoading ? (
            <ActivityIndicator
              size="large"
              color="#8486ED"
              className="mt-10 self-center"
            />
          ) : moviesError ? (
            <Text> Error: {moviesError?.message} </Text>
          ) : (
            <View className="flex-1">
              <View className="flex flex-col gap-5">
                <Text className="text-xl font-bold text-white">Top Rated</Text>

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
            </View>
          )}

          {moviesLoading ? (
            <ActivityIndicator
              size="large"
              color="#8486ED"
              className="mt-10 self-center"
            />
          ) : moviesError ? (
            <Text> Error: {moviesError?.message} </Text>
          ) : (
            <View className="flex-1">
              <View className="flex flex-col gap-5">
                <Text className="text-xl font-bold text-white">Upcoming</Text>

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
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
