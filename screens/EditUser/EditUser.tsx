import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import HeaderWithBack from "../../components/HeaderWithBack/HeaderWithBack";
import { page } from "./EditUser.style";

const EditUser = (props: any) => {
  const handleBack = () => {
    props.navigation.goBack(null);
  };

  return (
    <View style={page.container}>
      <View style={page.titleSection}>
        <HeaderWithBack
          title="Editar mi perfil"
          onChange={handleBack}
        ></HeaderWithBack>
      </View>
      <View style={page.itemSeparatorRule}></View>
      <View style={page.inputContainer}>
        <View style={page.inputView}>
          <TextInput
            style={page.inputText}
            placeholder="Nombre"
            value={props.route.params.user.name}
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={page.inputView}>
          <TextInput
            style={page.inputText}
            placeholder="Apellido"
            value={props.route.params.user.last_name}
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={page.inputView}>
          <TextInput
            style={page.inputText}
            placeholder="Correo"
            value={props.route.params.user.email}
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={page.inputView}>
          <TextInput
            style={page.inputText}
            placeholder="Contraseña"
            value={props.route.params.user.password}
            secureTextEntry
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => setEmail(text)}
          />
        </View>
        <TouchableOpacity style={page.editBtn}>
          <Text style={page.editTextBtn}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditUser;
