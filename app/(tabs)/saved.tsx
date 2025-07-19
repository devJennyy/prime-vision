import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const saved = () => {
  return (
    <SafeAreaView className="flex-1 flex flex-col justify-between items-center bg-primary">
      <View className="w-full flex flex-col justify-center items-center gap-7 mt-10 z-10">
        <View className="w-32 h-32 rounded-[2rem] bg-accent"></View>
        <Text className="text-3xl font-bold text-white capitalize">
          Your name Here
        </Text>

        <View className="flex flex-row justify-between items-center w-full px-10 mt-4">
          <View className="flex flex-col gap-1 justify-center items-center">
            <Text className="text-white text-3xl font-bold">47</Text>
            <Text className="text-muted/70 font-medium text-base tracking-wide">
              All Movies
            </Text>
          </View>
          <View className="flex flex-col gap-1 justify-center items-center">
            <Text className="text-white text-3xl font-bold">8</Text>
            <Text className="text-muted/70 font-medium text-base tracking-wide">
              Popular
            </Text>
          </View>
          <View className="flex flex-col gap-1 justify-center items-center">
            <Text className="text-white text-3xl font-bold">22</Text>
            <Text className="text-muted/70 font-medium text-base tracking-wide">
              Upcoming
            </Text>
          </View>
        </View>
      </View>

      <View className="relative w-full h-full mt-[-10rem]">
        <LinearGradient
          colors={["#3842A8", "#030812"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.gradient}
          className="w-full h-full z-[-1]"
        ></LinearGradient>
        <View className="absolute bottom-0 w-full h-[77%] bg-primary rounded-t-[3rem] z-10"></View>
      </View>
    </SafeAreaView>
  );
};

export default saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
