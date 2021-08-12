import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15,
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonTitle: {
    fontSize: 17,
    marginLeft: 5,
  },
  buttonTitleBold: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
