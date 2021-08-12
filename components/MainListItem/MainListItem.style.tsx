import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {},
  containerText: {
    paddingTop: 15,
    padding: 5,

    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "flex",
  },
  containerTitle: {
    //order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
    fontSize: 16,
    fontWeight: "bold",
    color: "#547d2d",
  },
  containerPrice: {
    //order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
    fontSize: 18,
    fontWeight: "bold",
    width: "auto",
  },
  containerPlace: {
    fontSize: 15,
  },
});
