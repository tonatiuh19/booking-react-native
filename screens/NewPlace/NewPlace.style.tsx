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
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  radioView: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  inputText: {
    height: 50,
    color: "#030000",
    fontSize: 20,
  },
  radioText: {
    color: "#030000",
    fontSize: 20,
  },
  inputSelect: {
    fontSize: 20,
  },
  searchContainer: {
    width: "80%",
    borderRadius: 15,
    marginBottom: 20,
  },
});

export const pickerStyle = {
  inputIOS: {
    color: "#030000",
  },
  inputAndroid: {
    color: "#030000",
  },
  placeholderColor: "#030000",
};
