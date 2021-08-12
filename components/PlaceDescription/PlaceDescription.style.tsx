import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 50,
    fontWeight: "bold",
    lineHeight: 50,
  },
  itemPlace: {
    fontSize: 18,
    color: "#3d5c21",
  },
  itemSeparatorRule: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  itemSeparator: {
    paddingTop: 10,
    paddingBottom: 100,
  },
});
