import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
  },
  containerButton: {
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: "center",
  },
  containerTittle: {
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
  },
});
