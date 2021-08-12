import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Management from "./Management/Management";
import { page } from "./TabTwoScreen.style";
import {
  createStackNavigator,
  HeaderBackButton,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Reservations from "./Reservations/Reservations";
import Payments from "./Payments/Payments";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditUser from "./EditUser/EditUser";
import HostReservations from "./HostReservations/HostReservations";
import HostReservationsDesc from "./HostReservationsDesc/HostReservationsDesc";

const Stack = createStackNavigator();

function ManagementNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="TabTwoScreen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <Stack.Screen
        name="TabTwoScreen"
        options={{ headerShown: false }}
        component={TabTwoScreen}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reservations"
        component={Reservations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HostReservations"
        component={HostReservations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HostReservationsDesc"
        component={HostReservationsDesc}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ManagementNavigation;

function TabTwoScreen(props: any) {
  const [isLoggedIN, setsLoggedIN] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        setsLoggedIN(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={page.container}>
      {isLoggedIN ? <Management></Management> : <SignIn></SignIn>}
    </View>
  );
}

TabTwoScreen.defaultProps = {
  updateBadge: "0",
};
