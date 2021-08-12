/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { getReservations } from "../services/api.service";
import { Reservations } from "../interfaces/reservations.interface";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Lugares"
      tabBarOptions={{
        activeTintColor: Colors.tint,
        style: { backgroundColor: Colors.backgroundColorTabNavigator },
      }}
    >
      <BottomTab.Screen
        name="Lugares"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              size={30}
              style={{ marginBottom: -3 }}
              name="map-marked-alt"
              color={color}
            />
          ),
        }}
      />

      {/*<BottomTab.Screen
          name="Tablero"
          component={TabTwoNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                size={24}
                style={{ marginBottom: -3 }}
                name="dashboard"
                color={color}
              />
            ),
            tabBarBadge: reservationQty,
          }}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        />*/}

      <BottomTab.Screen
        name="Tablero"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={24}
              style={{ marginBottom: -3 }}
              name="dashboard"
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
