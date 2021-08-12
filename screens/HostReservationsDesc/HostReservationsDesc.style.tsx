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
  sectionContainer: {
    paddingTop: 10,
  },
  noReservationsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "50%",
  },
  noReservationsTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
