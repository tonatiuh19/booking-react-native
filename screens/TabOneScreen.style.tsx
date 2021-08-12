import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  viewContent: {
    //padding: 15,
    //paddingTop: 300,
    paddingBottom: 300,
    borderRadius: 10,
  },
  scrollViewSearch: {},
  searchContainer: {
    paddingTop: Layout.window.height * 0.09,
    width: Layout.window.width * 0.92,
  },
});
