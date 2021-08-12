import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CreditCardItem from "../../components/CreditCardItem/CreditCardItem";
import HeaderWithBack from "../../components/HeaderWithBack/HeaderWithBack";
import { Cards } from "../../interfaces/cards.interfaces";
import { getuserCards, insertCardUser } from "../../services/api.service";
import { page } from "./Payments.style";
import { FontAwesome } from "@expo/vector-icons";
import CreditCard from "react-native-credit-card-form-ui";
import CloseButton from "../../components/CloseButton/CloseButton";
import ActionButton from "../../components/ActionButton/ActionButton";
import Badge from "../../components/Badge/Badge";

const Payments = (props: any) => {
  const [cards, setCards] = useState<any>([]);
  const creditCardRef = React.useRef() as any;
  const [modalVisiblePayment, setModalVisiblePayment] = useState(false);
  const [initialValuesCard, setInitialValuesCard] = useState({
    number: "",
    holder: "",
    expiration: "",
    cvv: "",
  });
  const [validCard, setValidCard] = useState(false);

  const handleBack = () => {
    props.navigation.goBack(null);
  };

  const handleSubmit = React.useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      if (error !== null) {
        setValidCard(true);
      } else {
        insertCardUser(1, data.number, data.brand).then((item) => {
          if (item == 1) {
            setModalVisiblePayment(false);
            gettingUserCards();
          }
        });
      }
      /*console.log("ERROR: ", error);
      console.log("CARD DATA: ", data);*/
    }
  }, []);

  const closeModal = () => {
    setModalVisiblePayment(false);
  };

  const gettingUserCards = () => {
    getuserCards(props.route.params.id_user).then((item: Cards[] | string) => {
      //console.log(item);
      setCards(item);
    });
  };

  useEffect(() => {
    gettingUserCards();
  }, []);

  return (
    <View style={page.container}>
      {modalVisiblePayment ? (
        <View style={page.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisiblePayment}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={20}
              style={page.containerPayForm}
            >
              <View style={page.closeContainer}>
                <TouchableOpacity
                  style={page.buttonClose}
                  onPress={() => {
                    closeModal();
                  }}
                >
                  <CloseButton></CloseButton>
                </TouchableOpacity>
              </View>
              <CreditCard
                ref={creditCardRef}
                background="#92b076"
                labels={{
                  holder: "Nombre de Titular",
                  expiration: "Expiración",
                  cvv: "CCV",
                }}
                placeholders={{
                  number: "0000 0000 0000 0000",
                  holder: "Nombre de Titular",
                  expiration: "MM/YYYY",
                  cvv: "000",
                }}
                initialValues={initialValuesCard}
                placeholderTextColor={"#506650"}
              />
              {validCard ? (
                <Badge title="Completa los datos que faltan"></Badge>
              ) : null}

              <View style={page.containerAdd}>
                <TouchableOpacity onPress={handleSubmit}>
                  <ActionButton
                    text="Guardar"
                    iconName="plus-square"
                  ></ActionButton>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </Modal>
        </View>
      ) : (
        <View>
          <View style={page.titleSection}>
            <HeaderWithBack
              title="Mis tarjetas"
              onChange={handleBack}
            ></HeaderWithBack>
          </View>
          <View style={page.itemSeparatorRule}></View>
          <ScrollView style={page.sectionContainer}>
            {cards.map((item, index) => {
              return (
                <CreditCardItem
                  key={index}
                  active={item.active}
                  card={item.card}
                  type={item.type}
                ></CreditCardItem>
              );
            })}
          </ScrollView>
          <TouchableOpacity onPress={() => setModalVisiblePayment(true)}>
            <View style={page.newCard}>
              <Text style={page.newCardTitle}>
                <FontAwesome name="plus-square" size={14} color="black" />{" "}
                Añadir nueva tarjeta
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Payments;
