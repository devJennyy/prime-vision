import React, { useState } from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

interface MyListButtonProps {
  firstIcon: ImageSourcePropType;
  secondIcon: ImageSourcePropType;
  label: string;
}

const MyListButton: React.FC<MyListButtonProps> = ({ firstIcon, secondIcon, label }) => {
  const [isAdded, setIsAdded] = useState(false);

  const plusRotation = useSharedValue(0);
  const plusOpacity = useSharedValue(1);

  const checkRotation = useSharedValue(-30);
  const checkOpacity = useSharedValue(0);

  const plusStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${plusRotation.value}deg` }],
    opacity: plusOpacity.value,
  }));

  const checkStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${checkRotation.value}deg` }],
    opacity: checkOpacity.value,
  }));

  const handleToggle = () => {
    if (!isAdded) {
      plusRotation.value = withTiming(30, { duration: 300 });
      plusOpacity.value = withTiming(0, { duration: 300 }, () =>
        runOnJS(setIsAdded)(true)
      );
      checkRotation.value = withTiming(0, { duration: 300 });
      checkOpacity.value = withTiming(1, { duration: 300 });
    } else {
      checkRotation.value = withTiming(-30, { duration: 300 });
      checkOpacity.value = withTiming(0, { duration: 300 }, () =>
        runOnJS(setIsAdded)(false)
      );
      plusRotation.value = withTiming(0, { duration: 300 });
      plusOpacity.value = withTiming(1, { duration: 300 });
    }
  };

  return (
    <Pressable onPress={handleToggle}>
      <View className="flex flex-col justify-center items-center">
        <View className="flex-1 flex justify-center items-center">
          <Animated.View style={[{ position: 'absolute' }, plusStyle]}>
            <Image
              source={firstIcon}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </Animated.View>

          <Animated.View style={[{ position: 'absolute' }, checkStyle]}>
            <Image
              source={secondIcon}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </Animated.View>
        </View>

        <Text className="text-white font-bold text-sm mt-6">{label}</Text>
      </View>
    </Pressable>
  );
};

export default MyListButton;
