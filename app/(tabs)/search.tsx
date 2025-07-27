import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { fetchDiscover, fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../globals.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: discoverMovies } = useFetch(() => fetchDiscover());
  const [visibleCount, setVisibleCount] = useState(9);
  const loadMoreMovies = () => {
    setVisibleCount((prev) => prev + 9);
  };
  const visibleMovies = discoverMovies?.slice(0, visibleCount) || [];

  const {
    data: allMovies = [],
    loading,
    error,
    refetch,
  } = useFetch(() => fetchMovies({ query: searchQuery }), true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refetch();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const isSearching = searchQuery.trim().length > 0;
  const hasResults = Array.isArray(allMovies) && allMovies.length > 0;

  return (
    <SafeAreaView className="relative flex-1 bg-primary">
      <Image
        source={require("../../assets/images/ellipsis.png")}
        className="w-full h-1/2 absolute top-0"
      />
      <StatusBar style="light" />

      <FlatList
        data={isSearching ? allMovies : []}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        initialNumToRender={9}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 16,
          marginVertical: 10,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="mt-2 px-5"
        ListHeaderComponent={
          <>
            <View className="w-full justify-center items-center">
              <Image
                source={require("../../assets/images/logo.png")}
                className="w-52 h-14"
                resizeMode="contain"
              />
            </View>

            <View className="mt-5">
              <SearchBar
                placeholder="Search for a movie"
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>

            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {isSearching && hasResults && (
              <Text className="text-xl text-white font-semibold mb-2 mt-[-10px]">
                Search Results for{" "}
                <Text className="text-accent font-bold">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          loading ? null : error ? null : isSearching ? (
            <Text className="text-center text-gray-500 mt-5">
              No movies found.
            </Text>
          ) : (
            <View className="flex flex-col gap-5">
              <Text className="text-xl font-bold text-white">
                Discover Movies
              </Text>
              <FlatList
                data={visibleMovies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 16,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                contentContainerStyle={{
                  paddingBottom: 80,
                }}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                  visibleMovies.length < (discoverMovies?.length || 0) ? (
                    <TouchableOpacity
                      onPress={loadMoreMovies}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Load More</Text>
                    </TouchableOpacity>
                  ) : null
                }
              />
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1C1C3A",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#8486ED",
    fontWeight: "bold",
    fontSize: 14,
  },
});
