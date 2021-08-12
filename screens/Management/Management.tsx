import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { page } from "./Management.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getReservations } from "../../services/api.service";
import { Reservations } from "../../interfaces/reservations.interface";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loading/Loading";

const Management = (props: any) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [reservationQty, setReservationQty] = useState(0);
  const [userInfo, setUserInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const getData = async () => {
    try {
      const value: any = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        setUserInfo(JSON.parse(value));
      }
      return JSON.parse(value);
    } catch (e) {
      console.log(e);
    }
  };

  const signOut = () => {
    AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{ name: "Tablero" }],
    });
  };

  useEffect(() => {
    setLoading(true);
    getData().then((resp) => {
      if (resp.type === 2) {
        setIsAdmin(true);
      }
      getReservations(userInfo.id).then((item: string | Reservations[]) => {
        setReservationQty(item.length);

        setLoading(false);
      });
    });
  }, [isFocused]);

  return (
    <View data-testid="TabTwoItem" style={page.container}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <View>
          <View>
            <View style={page.profileSection}>
              <Text style={page.names}>{userInfo.name}</Text>
              <Text style={page.names}>{userInfo.last_name}</Text>

              <View style={page.buttonsContainer}>
                <TouchableOpacity
                  style={page.buttonEdit}
                  onPress={() => {
                    navigation.navigate("EditUser", { user: userInfo });
                  }}
                >
                  <Text style={page.buttonSectionTitle}>
                    <FontAwesome5 name="user-edit" size={18} color="black" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signOut()}>
                  <Text style={page.buttonSectionTitle}>
                    <FontAwesome5 name="power-off" size={18} color="black" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={page.itemSeparatorRule}></View>
          <View style={page.sectionContainer}>
            <View>
              <Text style={page.tagTitle}>Reservas</Text>
              <TouchableOpacity
                style={page.buttonSection}
                onPress={() => {
                  navigation.navigate("Reservations", { id_user: userInfo.id });
                }}
              >
                <Text style={page.buttonSectionTitle}>
                  <FontAwesome5 name="map-marked-alt" size={18} color="black" />{" "}
                  Mis reservas
                </Text>
                {reservationQty ? (
                  <View style={page.reservationsContainerNumber}>
                    <Text style={page.reservationsNumber}>
                      {reservationQty}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            </View>
          </View>
          <View style={page.itemSeparatorRule}></View>
          <View style={page.sectionContainer}>
            <View>
              <Text style={page.tagTitle}>Pagos</Text>
              <TouchableOpacity style={page.buttonSection}>
                <Text
                  style={page.buttonSectionTitle}
                  onPress={() => {
                    navigation.navigate("Payments", { id_user: userInfo.id });
                  }}
                >
                  <FontAwesome name="credit-card-alt" size={18} color="black" />{" "}
                  Metodo de pago
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {isAdmin ? (
            <View>
              <View style={page.itemSeparatorRule}></View>
              <View style={page.sectionContainer}>
                <View>
                  <Text style={page.tagTitle}>Huespedes</Text>
                  <TouchableOpacity style={page.buttonSection}>
                    <Text
                      style={page.buttonSectionTitle}
                      onPress={() => {
                        navigation.navigate("HostReservations", {
                          id_user: userInfo.id,
                        });
                      }}
                    >
                      <FontAwesome name="dollar" size={18} color="black" />{" "}
                      Reservaciones
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
};

export default Management;
