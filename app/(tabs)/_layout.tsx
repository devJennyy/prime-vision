import { Tabs } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function TabIcon({
  focused,
  icon,
  floating = false,
}: {
  focused: boolean;
  icon: any;
  floating?: boolean;
}) {
  const scale = useRef(new Animated.Value(focused ? 1.4 : 1)).current;
  const translateY = useRef(new Animated.Value(focused ? -16 : 0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.4 : 1,
      useNativeDriver: true,
    }).start();

    Animated.spring(translateY, {
      toValue: focused ? -45 : 0,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {floating && focused && (
        <View
          style={{
            position: "absolute",
            top: -2,
            zIndex: -1,
          }}
        >
          <Svg width={124} height={62} viewBox="0 0 124 62" fill="none">
            <Path
              d="M62 1c17.002 0 32.347 3.362 43.404 8.725 10.731 5.204 17.127 12.126 17.571 19.458-10.039 2.018-17.273 4.984-22.87 8.334-5.748 3.44-9.73 7.263-13.207 10.78-3.5 3.54-6.413 6.68-10.129 8.977C73.102 59.542 68.615 61 62 61c-11.654 0-17.124-5.931-24.773-13.105-7.562-7.09-17.01-15.098-36.202-18.723.45-7.327 6.846-14.246 17.57-19.447C29.654 4.362 44.999 1 62 1z"
              fill="#030812"
              stroke="#161A42"
              strokeWidth={2.2}
            />
            <Path
              d="M124 28c-41.5 8-30.375-13-57.5-13C42.281 15 39 35 0 28 0 11.533 27.758 0 62 0c34.242 0 62 11.533 62 28z"
              fill="#030812"
            />
          </Svg>
        </View>
      )}

      <View style={floating && focused ? styles.floatingTab : styles.flatTab}>
        <Image
          source={icon}
          style={{
            width: 28,
            height: 28,
            tintColor:
              floating && focused ? "#fff" : focused ? "#8180E7" : "#E0E0E0",
            zIndex: 5,
          }}
        />
      </View>
    </Animated.View>
  );
}

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#030812",
          borderTopColor: "#161A42",
          borderTopWidth: 2,
          height: 90,
          paddingBottom: 16,
          paddingTop: 12,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/icons/save.png")}
              floating
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/icons/search.png")}
              floating
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/icons/home.png")}
              floating
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/icons/profile.png")}
              floating
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/icons/setting.png")}
              floating
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  floatingTab: {
    backgroundColor: "#8180E7",
    borderRadius: 999,
    padding: 12,
    marginTop: -24,
    shadowColor: "#8180E7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  flatTab: {
    backgroundColor: "transparent",
    padding: 0,
    marginTop: 0,
    shadowColor: "transparent",
  },
});
