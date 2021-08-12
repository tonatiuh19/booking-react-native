import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Layout.window.width,
    position: "absolute",
    top: 30,
    height: 70,
    zIndex: 1,
  },
  splitContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "flex",
  },
  splitContainerFirst: {
    flexGrow: 0,
    flexShrink: 1,
    width: "75%",
  },
  splitContainerSecond: {
    flexGrow: 0,
    flexShrink: 1,
  },
  buttonsSecondary: {
    flexDirection: "row",
  },
  goingBack: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    margin: 5,
  },
});
