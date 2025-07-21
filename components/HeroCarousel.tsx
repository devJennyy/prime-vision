import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "../app/globals.css";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ITEM_WIDTH = 210;
const SPACING = 1;
const FULL_ITEM_WIDTH = ITEM_WIDTH + SPACING;

const GENRE_MAP: { [key: number]: string } = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  18: "Drama",
  27: "Horror",
  10749: "Romance",
};

export default function HeroCarousel() {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View style={styles.container}>
      {moviesLoading ? (
        <ActivityIndicator size="large" color="#8486ED" style={styles.loader} />
      ) : moviesError ? (
        <Text style={styles.errorText}>Error: {moviesError?.message}</Text>
      ) : (
        <Carousel movies={movies?.slice(0, 5) ?? []} />
      )}
    </View>
  );
}

function Carousel({ movies }: { movies: any[] }) {
  const router = useRouter();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<Animated.FlatList<any>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const textOpacity = useRef(new Animated.Value(1)).current;

  const loopingMovies = [...movies, ...movies, ...movies];
  const middleIndex = movies.length;

  useEffect(() => {
    const listenerId = scrollX.addListener(({ value }) => {
      const rawIndex = Math.round(value / FULL_ITEM_WIDTH);
      const normalizedIndex =
        ((rawIndex % movies.length) + movies.length) % movies.length;

      if (normalizedIndex !== activeIndex) {
        setActiveIndex(normalizedIndex);

        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start(() => {
          setDisplayIndex(normalizedIndex);
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        });
      }
    });

    return () => {
      scrollX.removeListener(listenerId);
    };
  }, [scrollX, movies.length, activeIndex, textOpacity]);

  useEffect(() => {
    if (flatListRef.current && movies.length > 0) {
      const targetIndex = 2;
      const initialOffset = (middleIndex + targetIndex) * FULL_ITEM_WIDTH;

      flatListRef.current.scrollToOffset({
        offset: initialOffset,
        animated: false,
      });

      scrollX.setValue(initialOffset);
      setActiveIndex(targetIndex);
      setDisplayIndex(targetIndex);
    }
  }, [middleIndex, movies, scrollX]);

  const activeMovie = movies[displayIndex];
  const genre = GENRE_MAP[activeMovie?.genre_ids?.[0]] ?? "Unknown";

  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        data={loopingMovies}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_ITEM_WIDTH}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: (SCREEN_WIDTH - ITEM_WIDTH) / 2,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        onScrollEndDrag={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          if (!flatListRef.current) return;

          if (
            offsetX <= FULL_ITEM_WIDTH ||
            offsetX >= (loopingMovies.length - 2) * FULL_ITEM_WIDTH
          ) {
            flatListRef.current.scrollToOffset({
              offset: middleIndex * FULL_ITEM_WIDTH,
              animated: false,
            });
          }
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * FULL_ITEM_WIDTH,
            index * FULL_ITEM_WIDTH,
            (index + 1) * FULL_ITEM_WIDTH,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: "clamp",
          });

          return (
            <View style={styles.itemWrapper}>
              <TouchableOpacity
                onPress={() => router.push(`/movies/${item.id}`)}
                activeOpacity={0.9}
              >
                <Animated.View
                  style={[
                    styles.cardContainer,
                    {
                      transform: [{ scale }],
                      opacity,
                    },
                  ]}
                >
                  <View style={styles.card}>
                    <Image
                      source={
                        item.poster_path
                          ? {
                              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                            }
                          : require("../assets/images/no-image-found.png")
                      }
                      style={styles.image}
                    />
                  </View>
                </Animated.View>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <View style={styles.centerWrapper}>
        <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
          <Text
            style={[
              styles.title,
              activeMovie?.title?.length > 30 && styles.titleSmall,
            ]}
            numberOfLines={2}
          >
            {activeMovie?.title}
          </Text>

          <Text style={styles.genre} numberOfLines={1}>
            {genre}
          </Text>
        </Animated.View>

        <View style={styles.indicatorContainer}>
          {movies.map((_, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                i === activeIndex && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    marginTop: 40,
    alignSelf: "center",
  },
  errorText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  cardContainer: {
    width: ITEM_WIDTH,
    marginRight: SPACING,
    alignItems: "center",
  },
  card: {
    width: ITEM_WIDTH,
    height: 280,
    backgroundColor: "#2c2c54",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  centerWrapper: {
    alignItems: "center",
    width: SCREEN_WIDTH,
    marginTop: 12,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    height: 80,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 50,
    lineHeight: 25,
    textAlign: "center",
    marginTop: 8,
  },
  titleSmall: {
    fontSize: 16,
  },
  genre: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 5,
    fontWeight: 500,
  },
  itemWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
  indicator: {
    width: 8,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#aaa",
    marginHorizontal: 4,
  },
  activeIndicator: {
    width: 20,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#8486ED",
  },
});
