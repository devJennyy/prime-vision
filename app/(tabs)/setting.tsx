import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, View } from "react-native";

const cloudData = [
  {
    image: require("../../assets/images/cloud1.png"),
    position: { top: 240, right: 20 },
  },
  {
    image: require("../../assets/images/cloud7.png"),
    position: { top: 150, left: 10 },
  },
  {
    image: require("../../assets/images/cloud2.png"),
    position: { top: 120, right: 80 },
  },
  {
    image: require("../../assets/images/cloud3.png"),
    position: { top: 200, left: 140 },
  },
  {
    image: require("../../assets/images/cloud4.png"),
    position: { top: 50, left: 80 },
  },
  {
    image: require("../../assets/images/cloud5.png"),
    position: { top: 40, right: 40 },
  },
  {
    image: require("../../assets/images/cloud6.png"),
    position: { top: 260, left: 25 },
  },
];

const Setting = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showTapHint, setShowTapHint] = useState(true);
  const animationRef = useRef(null);
  const inactivityTimeoutRef = useRef<number | null>(null);

  const fadeAnimations = useRef(
    cloudData.map(() => new Animated.Value(0))
  ).current;

  const resetInactivityTimer = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }

    inactivityTimeoutRef.current = setTimeout(() => {
      setShowTapHint(true);
    }, 1200);
  };

  const handlePress = () => {
    setShowTapHint(false);
    resetInactivityTimer();

    const currentIndex = clickCount % cloudData.length;

    Animated.timing(fadeAnimations[currentIndex], {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnimations[currentIndex], {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }, 2000);
    });

    setClickCount((prev) => prev + 1);
  };

  useEffect(() => {
    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Pressable onPress={handlePress}>
        <LottieView
          ref={animationRef}
          source={require("../../assets/animations/loading-animation.json")}
          autoPlay
          loop
          style={{ width: 400, height: 400 }}
        />
      </Pressable>

      {showTapHint && (
        <View
          style={{
            position: "absolute",
            bottom: 200,
            right: 10,
            alignItems: "center",
          }}
        >
          <LottieView
            source={require("../../assets/animations/tap-animation.json")}
            autoPlay
            loop
            style={{
              width: 150,
              height: 150,
            }}
          />
          <Animated.Text
            style={{
              color: "white",
              fontSize: 14,
              marginTop: -20,
            }}
          >
            Tap the Rabbit
          </Animated.Text>
        </View>
      )}

      {cloudData.map((cloud, index) => (
        <Animated.View
          key={index}
          style={{
            position: "absolute",
            opacity: fadeAnimations[index],
            ...cloud.position,
          }}
        >
          <Animated.Image
            source={cloud.image}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
          />
        </Animated.View>
      ))}

      <StatusBar style="light" />
    </View>
  );
};

export default Setting;
