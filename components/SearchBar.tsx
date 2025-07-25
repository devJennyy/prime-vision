import { useState } from "react";
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <View className="w-full max-w-full flex-row justify-between items-center gap-4 mb-10">
      <View className="flex-1 h-12 flex flex-row items-center px-4 gap-4 border border-accent/70 rounded-full">
        <TouchableOpacity className="h-5 w-5">
          <Image
            source={require("../assets/icons/search-two.png")}
            className="w-full h-full"
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TextInput
          onPress={onPress}
          placeholder={placeholder}
          placeholderTextColor="#A1A5B6"
          value={value}
          onChangeText={onChangeText}
          className="w-full placeholder:text-[#A7ADBE]"
          style={{
            fontSize: 16,
            color: "#fff",
          }}
        />
      </View>

      <View className="relative z-50">
        <TouchableOpacity
          className="w-12 h-12 bg-accent rounded-full flex justify-center items-center"
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <Image
            source={require("../assets/icons/filter.png")}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>

        {showDropdown && (
          <Modal transparent animationType="fade">
            <TouchableOpacity
              className="absolute inset-0"
              onPress={() => setShowDropdown(false)}
            />
            <View
              className="absolute top-[13.5rem] right-5 w-40 bg-primary/80 border border-accent/40 rounded-xl shadow-lg p-2 z-50"
              style={{ elevation: 10 }}
            >
              <Text className="py-2 px-3 text-sm text-white">Option 1</Text>
              <Text className="py-2 px-3 text-sm text-white">Option 2</Text>
              <Text className="py-2 px-3 text-sm text-white">Option 3</Text>
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
