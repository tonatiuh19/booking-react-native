import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
    marginBottom: 15,
  },
  tagTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20,
    paddingBottom: 10,
  },
  tinyPicture: {
    width: Layout.window.width * 1.1,
    height: Layout.window.height * 1.1,
  },
  item: {
    width: Layout.window.width * 0.8,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dbf3fa",
    borderRadius: 20 / 2,
    overflow: "hidden",
    borderWidth: 0.1,
  },
  containerCarousel: {
    alignItems: "center",
    paddingBottom: 15,
  },
  containerText: {
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
    fontSize: 13,
    fontWeight: "bold",
  },
  containerDate: {
    //order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
    fontSize: 13,
    fontWeight: "bold",
    color: "#547d2d",
  },
  containerButtons: {
    //order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
  },
  containerButtonsRow: {
    flexDirection: "row",
  },
  buttonSection: {
    padding: 10,
    backgroundColor: "#547d2d",
    borderRadius: 10,
  },
  buttonSectionCancel: {
    padding: 10,
    backgroundColor: "#a12323",
    borderRadius: 10,
    marginLeft: 3,
  },
  buttonSectionComplete: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#547d2d",
    marginLeft: 3,
  },
  buttonSectionCancelled: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#9c3232",
    marginLeft: 3,
  },
  buttonSectionTitle: {
    fontSize: 13,
    color: "white",
  },
  buttonSectionTitleComplete: {
    fontSize: 13,
    color: "#547d2d",
  },
  buttonSectionTitleCancelled: {
    fontSize: 13,
    color: "#9c3232",
  },
  itemSeparatorRule: {
    paddingTop: 5,
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
  },
});
