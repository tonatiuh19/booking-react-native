import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: Layout.window.width * 0.9,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8ACC4B",
    borderRadius: 20 / 2,
    overflow: "hidden",
    borderWidth: 0.1,
  },
  tinyPicture: {
    width: Layout.window.width * 1.1,
    height: Math.round((Layout.window.width * 9) / 16) * 1.1,
  },
});
