import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import HeaderWithBack from "../../components/HeaderWithBack/HeaderWithBack";
import { page, pickerStyle } from "./NewPlace.style";
import RadioButtonRN from "radio-buttons-react-native";
import SearchInputNew from "../../components/SearchInputNew/SearchInputNew";

const NewPlace = (props: any) => {
  const [selected, setSelected] = useState();

  const handleBack = () => {
    props.navigation.goBack(null);
  };

  const handleChange = (params: any) => {
    console.log(
      params.geometry.location,
      params.address_components[0].short_name,
      params.address_components[1].long_name
    );
  };

  return (
    <View style={page.container}>
      <View style={page.titleSection}>
        <HeaderWithBack
          title="Nuevo lugar"
          onChange={handleBack}
        ></HeaderWithBack>
      </View>
      <View style={page.itemSeparatorRule}></View>
      <View style={page.inputContainer}>
        <View style={page.inputView}>
          <TextInput
            style={page.inputText}
            placeholder="Titulo"
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={page.inputView}>
          <TextInput
            style={page.inputText}
            placeholder="Precio"
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={page.searchContainer}>
          <ScrollView keyboardShouldPersistTaps={"handled"}>
            <SearchInputNew onChange={handleChange}></SearchInputNew>
          </ScrollView>
        </View>
        <View style={page.radioView}>
          <Text style={page.radioText}>¿Que tipo es?</Text>
          <RadioButtonRN
            data={[
              {
                id: 1,
                label: "Hotel",
              },
              {
                id: 2,
                label: "Departamento",
              },
              {
                id: 3,
                label: "Casa",
              },
            ]}
            selectedBtn={(e: any) => console.log(e)}
            activeColor="#8ACC4B"
          />
        </View>
      </View>
    </View>
  );
};

export default NewPlace;
