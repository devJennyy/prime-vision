import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import MovieCard from "./MovieCard";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const BottomSheet = () => {
  const {
    data: movies,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  const [visibleCount, setVisibleCount] = useState(9);

  const loadMoreMovies = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const visibleMovies = movies?.slice(0, visibleCount) || [];

  const translateY = useSharedValue(SCREEN_HEIGHT / 2.45);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      const newTranslateY = event.translationY + context.value.y;
      translateY.value = Math.max(0, newTranslateY);
    })
    .onEnd(() => {
      if (translateY.value < SCREEN_HEIGHT / 3) {
        translateY.value = withSpring(0);
      } else {
        translateY.value = withSpring(SCREEN_HEIGHT / 2.45);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />

        <View className="w-full flex flex-col gap-5 px-5 mt-2">
          {moviesError ? (
            <Text className="text-red-500">Error: {moviesError.message}</Text>
          ) : (
            <View className="flex flex-col gap-4">
              <Text className="text-xl font-bold text-white">
                Your Movie Lists
              </Text>

              <FlatList
                data={visibleMovies}
                renderItem={({ item }) => <MovieCard {...item} />}
                numColumns={3}
                initialNumToRender={9}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 12,
                  marginVertical: 10,
                }}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View className="w-4" />}
                contentContainerStyle={{ paddingBottom: 320 }}
                ListFooterComponent={
                  visibleMovies.length < (movies?.length || 0) ? (
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
          )}
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "#030812",
    position: "absolute",
    top: 50,
    borderRadius: 35,
    zIndex: 10,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "#8486ED",
    alignSelf: "center",
    marginVertical: 18,
    borderRadius: 2,
  },
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
