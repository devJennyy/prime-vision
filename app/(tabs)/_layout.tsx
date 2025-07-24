import { Asset } from "expo-asset";
import { Tabs, usePathname, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const TABS = [
  { name: "/saved", icon: require("../../assets/icons/save.png") },
  { name: "/search", icon: require("../../assets/icons/search.png") },
  { name: "/", icon: require("../../assets/icons/home.png") },
  { name: "/profile", icon: require("../../assets/icons/profile.png") },
  { name: "/setting", icon: require("../../assets/icons/setting.png") },
];

const TAB_BACKGROUNDS: Record<string, any> = {
  "/": require("../../assets/images/home-tab.png"),
  "/index": require("../../assets/images/home-tab.png"),
  "/profile": require("../../assets/images/profile-tab.png"),
  "/setting": require("../../assets/images/setting-tab.png"),
  "/search": require("../../assets/images/search-tab.png"),
  "/saved": require("../../assets/images/save-tab.png"),
};

function TabIcon({
  focused,
  icon,
  onPress,
}: {
  focused: boolean;
  icon: any;
  onPress: () => void;
}) {
  const scale = useRef(new Animated.Value(focused ? 1.3 : 1)).current;
  const translateY = useRef(new Animated.Value(focused ? -16 : 0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.3 : 1,
      useNativeDriver: true,
    }).start();

    Animated.spring(translateY, {
      toValue: focused ? -40 : -5,
      useNativeDriver: true,
    }).start();
  }, [focused, scale, translateY]);

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Animated.View
        style={{
          transform: [{ translateY }, { scale }],
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <View style={focused ? styles.floatingTab : styles.flatTab}>
          <Image
            source={icon}
            style={{
              width: 28,
              height: 28,
              tintColor: focused ? "#fff" : "#E0E0E0",
            }}
          />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const activePath = pathname === "/index" ? "/" : pathname;

  const [showTabs, setShowTabs] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    const preload = async () => {
      try {
        const images = Object.values(TAB_BACKGROUNDS);
        await Asset.loadAsync(images);
      } catch (e) {
        console.warn("Asset preload error:", e);
      }
    };
    preload();
  }, []);

  useEffect(() => {
    if (playCount === 1) {
      animationRef.current?.play();
    } else if (playCount === 2) {
      setShowTabs(true);
    }
  }, [playCount]);

  if (!showTabs) {
    return (
      <View style={styles.loadingContainer}>
        <LottieView
          ref={animationRef}
          source={require("../../assets/animations/loading.json")}
          autoPlay
          loop={false}
          onAnimationFinish={() => setPlayCount((prev) => prev + 1)}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: { display: "none" },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tabs.Screen name="saved" />
        <Tabs.Screen name="search" />
        <Tabs.Screen name="index" />
        <Tabs.Screen name="profile" />
        <Tabs.Screen name="setting" />
      </Tabs>

      <View style={styles.customTabWrapper}>
        {Object.entries(TAB_BACKGROUNDS).map(([path, image], idx) => {
          const isActive =
            activePath === path || (path === "/" && activePath === "/index");

          return (
            <Image
              key={idx}
              source={image}
              style={[styles.tabBackground, { opacity: isActive ? 1 : 0 }]}
              resizeMode="cover"
            />
          );
        })}

        <View style={styles.iconRow}>
          {TABS.map((tab, i) => {
            const isFocused = activePath === tab.name;

            return (
              <TabIcon
                key={i}
                focused={isFocused}
                icon={tab.icon}
                onPress={() => router.push(tab.name as any)}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  customTabWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
  tabBackground: {
    position: "absolute",
    bottom: -2,
    width: "100%",
    height: 100,
    zIndex: 1,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
    zIndex: 10,
  },
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
    marginTop: 1,
    shadowColor: "transparent",
  },
});
