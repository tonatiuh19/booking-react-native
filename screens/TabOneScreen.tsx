import React, { useEffect, useState } from "react";
import { page } from "./TabOneScreen.style";
import { RefreshControl, Text, View } from "react-native";
import CarrouselCard from "../components/CarrouselCard/CarrouselCard";
import Loading from "../components/Loading/Loading";
import { getPlaces } from "../services/api.service";
import MainItemPlace from "../components/MainItemPlace/MainItemPlace";
import { ScrollView } from "react-native-gesture-handler";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import PlaceDesc from "./PlaceDesc/PlaceDesc";
import SearchInput from "../components/SearchInput/SearchInput";
import * as Location from "expo-location";
import Request from "./Request/Request";

const Stack = createStackNavigator();

const PlaceNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabOneScreen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <Stack.Screen
        name="TabOneScreen"
        options={{ headerShown: false }}
        component={TabOneScreen}
      />
      <Stack.Screen
        name="PlaceDesc"
        component={PlaceDesc}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Request"
        component={Request}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PlaceNavigation;

function TabOneScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [alertError, setAlertError] = useState(false);
  const [noPlaces, setNoPlaces] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const gettingPlaces = (lat: string, lang: string) => {
    setLoading(true);
    getPlaces(lat, lang).then((item: any) => {
      setPlaces(item);
      setLoading(false);
    });
  };

  const locationAccess = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return 0;
    }

    let location = await Location.getCurrentPositionAsync({});
    return location;
  };

  const initialData = () => {
    setLoading(true);
    locationAccess()
      .then((x: any) => {
        if (x === 0) {
          gettingPlaces("", "");
        } else {
          gettingPlaces(
            x.coords.latitude.toString(),
            x.coords.longitude.toString()
          );
        }
      })
      .catch(() => console.log("nor"));
  };

  const handleRefresh = () => {
    gettingPlaces("", "");
  };

  const handleChange = (coordenates: any) => {
    gettingPlaces(coordenates.lat.toString(), coordenates.lng.toString());
  };

  useEffect(() => {
    initialData();
  }, []);

  return (
    <View style={page.container}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <View>
          <View style={page.searchContainer}>
            <ScrollView
              style={page.scrollViewSearch}
              keyboardShouldPersistTaps={"handled"}
            >
              <SearchInput onChange={handleChange}></SearchInput>
            </ScrollView>
          </View>
          <View style={page.viewContent}>
            <MainItemPlace
              places={places}
              onChange={handleRefresh}
            ></MainItemPlace>
          </View>
        </View>
      )}
    </View>
  );
}
