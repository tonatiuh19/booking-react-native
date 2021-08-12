import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "flex",
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
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
  activeColor: {
    color: "#547d2d",
  },
});
