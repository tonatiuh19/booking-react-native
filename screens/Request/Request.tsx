import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import HeaderWithBack from "../../components/HeaderWithBack/HeaderWithBack";
import { page } from "./Request.style";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import "moment/min/locales";
import ActionButton from "../../components/ActionButton/ActionButton";
import {
  getActiveuserCard,
  insertReservation,
} from "../../services/api.service";
import CreditCardItem from "../../components/CreditCardItem/CreditCardItem";
import { useNavigation } from "@react-navigation/native";
import { getDisabledDates } from "../../services/api.service";
import { getMissingDates } from "../../assets/resources/Decode/Decode";
import { SafeAreaView } from "react-native-safe-area-context";
import Badge from "../../components/Badge/Badge";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loading/Loading";

const deviceLocale = "es";

const Request = (props: any) => {
  const navigation = useNavigation();
  const { item } = props.route.params;
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const minDate = new Date(); // Today
  const maxDate = new Date(2022, 6, 3);
  const [userCardActive, setUserCardActive] = useState<any>({});
  const [disabledDated, setdisabledDated] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [userInfo, setUserInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        setUserInfo(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleBack = (props: any) => {
    navigation.goBack();
  };

  const onDateChange = (date, type) => {
    if (type === "END_DATE") {
      //console.log(moment(date).format("L"));
      setDateEnd(moment(date).format("L"));
    } else {
      setDateStart(moment(date).format("L"));
    }
  };

  const pay = () => {
    if (name.length === 0) {
      setValidForm(true);
      return;
    }

    if (email.length === 0) {
      setValidForm(true);
      return;
    }
    if (dateStart.length === 0) {
      setValidForm(true);
      return;
    }
    if (dateEnd.length === 0) {
      setValidForm(true);
      return;
    }
    insertReservation(1, item.id, dateStart, dateEnd, name, email).then(
      (item) => {
        if (item === 1) {
          props.navigation.reset({
            index: 0,
            routes: [{ name: "Tablero" }],
          });
        }
      }
    );
  };

  useEffect(() => {
    getData().then(() => {
      getActiveuserCard(userInfo.id).then((respCard) => {
        setUserCardActive(respCard[0]);
      });
      getDisabledDates(item.id).then((resp) => {
        let arr: any = [];
        for (let i in resp) {
          for (let j in getMissingDates(resp[i])) {
            arr.push(getMissingDates(resp[i])[j]);
          }
        }

        setdisabledDated(arr);
        setLoading(false);
      });
    });
  }, []);

  return (
    <View style={page.container}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <View>
          <View style={page.titleSection}>
            <HeaderWithBack
              title={item.title}
              onChange={handleBack}
            ></HeaderWithBack>
          </View>
          <View style={page.itemSeparatorRule}></View>
          <ScrollView>
            <View style={page.sectionContainer}>
              <View>
                <Text style={page.tagTitle}>¿Para cuando?</Text>
              </View>
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
                todayBackgroundColor="#f2e6ff"
                selectedDayColor="#5d5d5d"
                selectedDayTextColor="#FFFFFF"
                onDateChange={onDateChange}
                selectedDisabledDatesTextStyle={"#5d5d5d"}
                disabledDates={disabledDated}
              />
            </View>
            <View style={page.itemSeparatorRule}></View>

            <View style={page.sectionContainer}>
              <View>
                <Text style={page.tagTitle}>¿Quien reserva?</Text>
              </View>

              <TextInput
                style={page.inputEmail}
                onChangeText={setName}
                placeholder="Nombre y Apellido"
                keyboardType="default"
                placeholderTextColor={"#969696"}
              />
              <TextInput
                style={page.inputEmail}
                onChangeText={setEmail}
                placeholder="Correo electronico"
                keyboardType="email-address"
                placeholderTextColor={"#969696"}
                autoCapitalize="none"
              />
            </View>
            <View style={page.itemSeparatorRule}></View>
            <View style={page.sectionContainer}>
              <View>
                <Text style={page.tagTitle}>Pago</Text>
              </View>
              <CreditCardItem
                active={userCardActive.active}
                card={userCardActive.card}
                type={userCardActive.type}
              ></CreditCardItem>
              {validForm ? (
                <Badge title="Todos los campos son obligatorios"></Badge>
              ) : null}
              <TouchableOpacity onPress={() => pay()}>
                <ActionButton
                  iconName="lock"
                  text="Pagar"
                  bold="true"
                ></ActionButton>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Request;
