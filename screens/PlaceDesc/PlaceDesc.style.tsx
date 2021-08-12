import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  containerLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  carrousel: {},
  tinyPicture: {
    width: Layout.window.width * 1.1,
    height: Math.round((Layout.window.width * 9) / 16) * 1.2,
  },
  itemCarrousel: {},
  containerItem: {
    marginLeft: 10,
    marginRight: 10,
  },

  itemPrice: {
    fontSize: 25,
    fontWeight: "bold",
  },
  itemSeparator: {
    paddingTop: 10,
    paddingBottom: 100,
  },
  itemSeparatorRule: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  containerText: {
    paddingTop: 15,
    padding: 5,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "flex",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000",
  },
});
