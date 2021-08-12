import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
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
  itemSeparatorRule: {
    paddingTop: 5,
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
  },
  containerButtons: {
    //order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
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
  containerButtonsRow: {
    flexDirection: "row",
  },
  buttonSectionPending: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#7d692d",
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
  buttonSectionTitleComplete: {
    fontSize: 13,
    color: "#547d2d",
  },
  buttonSectionTitlePending: {
    fontSize: 13,
    color: "#7d692d",
  },
  buttonSectionTitleCancelled: {
    fontSize: 13,
    color: "#9c3232",
  },
});
