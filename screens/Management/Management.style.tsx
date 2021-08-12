import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  itemSeparatorRule: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    padding: 15,
  },
  profileSection: {
    paddingTop: 80,
  },
  names: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
  },
  buttonsContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    position: "absolute",
    bottom: 3,
  },
  buttonEdit: {
    marginRight: 15,
  },
  reservationsContainerNumber: {
    alignSelf: "flex-end",
    position: "absolute",

    padding: 15,
    borderRadius: 10,
    backgroundColor: "#7bb543",
  },
  reservationsNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  tagTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20,
    paddingBottom: 10,
  },
  sectionContainer: {
    paddingTop: 10,
  },
  editProfile: {},
  buttonSection: {
    padding: 15,
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
  },
  buttonSectionTitle: {
    fontSize: 17,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    padding: 15,
  },
});
