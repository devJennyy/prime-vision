import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const saved = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Text className="text-white text-3xl font-bold">Saved</Text>
      <StatusBar style="light" />
    </View>
  );
};

export default saved;
