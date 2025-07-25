import { useUser } from "@/context/UserContext";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { displayName, setDisplayName, setProfileImage, profileImage } = useUser();
  const [submitted, setSubmitted] = useState(false);

  const nameRegex = /^[A-Za-z\s]*$/;

  const handleUpdate = () => {
    setSubmitted(true);
    if (!firstName || !lastName) return;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) return;

    const fullName = `${firstName} ${lastName}`.trim();
    setDisplayName(fullName || "Your name here");
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "We need access to your photos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const isFirstNameInvalid =
    submitted && (!firstName || !nameRegex.test(firstName));
  const isLastNameInvalid =
    submitted && (!lastName || !nameRegex.test(lastName));

  return (
    <View className="flex-1 justify-start items-center bg-primary">
      <StatusBar style="light" />

      <View className="w-full flex flex-col justify-center items-center gap-7 z-10 relative">
        <Image
          source={require("../../assets/images/background-profile.png")}
          className="w-full h-[76px] absolute top-20"
          resizeMode="contain"
        />

        <View className="relative mt-32">
          <View className="border-2 border-accent p-2 rounded-full">
            <View className="bg-white rounded-full w-44 h-44">
              <Image
                source={
                  profileImage
                    ? { uri: profileImage }
                    : require("../../assets/images/default-avatar.jpg")
                }
                className="w-full h-full rounded-full"
                resizeMode="cover"
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={pickImage}
            className="bg-white p-[2px] rounded-full absolute bottom-2 right-2"
          >
            <View className="flex justify-center items-center bg-accent p-2 rounded-full">
              <Image
                source={require("../../assets/icons/camera.png")}
                className="w-7 h-7"
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>

        <Text className="text-3xl font-bold text-white capitalize w-[75%] line-clamp-1 text-center">
          {displayName}
        </Text>

        <View className="w-11/12 gap-6 mt-5">
          <View>
            <Text className="text-white mb-3">
              Name <Text className="text-red-500">*</Text>
            </Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#999"
              value={firstName}
              onChangeText={setFirstName}
              className={`w-full rounded-xl px-4 py-5 text-white border ${
                isFirstNameInvalid ? "border-red-500" : "border-accent/60"
              }`}
            />
            {submitted && !firstName && (
              <Text className="text-red-500 mt-1 text-sm">*Required</Text>
            )}
            {submitted && firstName && !nameRegex.test(firstName) && (
              <Text className="text-red-500 mt-1 text-sm">
                *Only letters and spaces allowed
              </Text>
            )}
          </View>

          <View>
            <Text className="text-white mb-3">
              Last Name <Text className="text-red-500">*</Text>
            </Text>
            <TextInput
              placeholder="Enter your lastname"
              placeholderTextColor="#999"
              value={lastName}
              onChangeText={setLastName}
              className={`w-full rounded-xl px-4 py-5 text-white border ${
                isLastNameInvalid ? "border-red-500" : "border-accent/60"
              }`}
            />
            {submitted && !lastName && (
              <Text className="text-red-500 mt-1 text-sm">*Required</Text>
            )}
            {submitted && lastName && !nameRegex.test(lastName) && (
              <Text className="text-red-500 mt-1 text-sm">
                *Only letters and spaces allowed
              </Text>
            )}
          </View>

          <TouchableOpacity
            className="bg-accent rounded-xl py-4 mt-4"
            onPress={handleUpdate}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
