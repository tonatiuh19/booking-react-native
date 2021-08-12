import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  titleSection: {
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
  },
  itemSeparatorRule: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    padding: 5,
  },
  sectionContainer: {
    paddingTop: 10,
  },
  itemSection: {
    padding: 15,
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
  },
  tagTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20,
    paddingBottom: 10,
  },
  itemSectionTitle: {
    fontSize: 17,
  },
  newCard: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
  },
  newCardTitle: {
    fontSize: 17,
  },
  modalContainer: {
    paddingTop: 150,
    alignItems: "flex-start",
  },
  containerPayForm: {
    alignItems: "center",
    justifyContent: "center",
  },
  closeContainer: {
    width: Layout.window.width,
  },
  buttonClose: {
    alignItems: "flex-start",
  },
  containerAdd: {
    marginTop: 10,
    width: Layout.window.width,
    padding: 15,
  },
});
