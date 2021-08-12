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
  itemSeparatorRule: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  sectionContainer: {
    paddingTop: 10,
  },
  tagTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20,
    paddingBottom: 15,
  },
  buttonPay: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
  },
  buttonPayTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  inputEmail: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
