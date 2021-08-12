import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export const page = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "flex",
  },
  splitContainerFFirst: {
    flexGrow: 0,
    flexShrink: 1,
    width: "50%",
  },
  splitContainerFSecond: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "row",
  },
  priceContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  priceTitle: {
    fontSize: 30,
    top: "50%",
    fontWeight: "bold",
    color: "white",
  },
  reserveButton: {
    width: Layout.window.width / 2.15,
    height: 70,
    backgroundColor: "#7bb543",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  reserveButtonTitle: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  reserveButtonContainer: {
    padding: 10,
  },
});
