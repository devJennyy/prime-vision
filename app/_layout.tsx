import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./globals.css";

import { UserProvider } from "../context/UserContext";

export default function RootLayout() {
  return (
    <UserProvider>
      <StatusBar hidden={false} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
