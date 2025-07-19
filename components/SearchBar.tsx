import { Image, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
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

      <TouchableOpacity className="w-12 h-12 bg-accent rounded-full flex justify-center items-center">
        <Image
          source={require("../assets/icons/filter.png")}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
