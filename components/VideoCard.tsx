import { Dimensions, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const YouTubePlayer = ({
  videoId,
  autoPlay = false,
}: {
  videoId: string;
  autoPlay?: boolean;
}) => {
  const autoplayParam = autoPlay ? "?autoplay=1&mute=1" : "";
  const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplayParam}`;

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        source={{ uri: embedUrl }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get("window").width * 9) / 16,
    width: "100%",
    overflow: "hidden",
  },
  webview: {
    flex: 1,
  },
});

export default YouTubePlayer;
