import BottomSheet from "@/components/BottomSheet";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const saved = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />

        <Image
          source={require("../../assets/images/background-profile.png")}
          className="w-full h-[76px] absolute top-20"
          resizeMode="cover"
        />

        <View className="w-full flex flex-col justify-center items-center gap-7 mt-10 z-10 absolute top-20">
          <View className="border border-accent p-[6px] rounded-[2.3rem]">
            <View className="w-32 h-32 bg-white rounded-[2rem]">
              <Image
                source={require("../../assets/images/default-avatar.jpg")}
                className="w-32 h-32 rounded-[2rem]"
                resizeMode="contain"
              />
            </View>
          </View>

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

        <View className="absolute w-full h-[70%] bottom-0">
          <LinearGradient
            colors={["#3842A8", "#030812"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.gradient}
            className="w-full h-1/2 z-[-1]"
          ></LinearGradient>
        </View>
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  );
};

export default saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#030812",
    position: "relative",
  },
  gradient: {
    flex: 1,
  },
});
