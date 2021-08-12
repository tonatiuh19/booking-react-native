import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { page } from "./SignIn.style";
import { useNavigation } from "@react-navigation/native";
import Badge from "../../components/Badge/Badge";
import { getUser } from "../../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = (props: any) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onNavigateSignUp = () => {
    navigation.navigate("SignUp");
  };

  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const logIn = () => {
    if (email.length === 0 || password.length === 0) {
      setErrorText("Completa todos los campos");
      setError(true);
      return;
    }
    setError(false);
    setErrorText("");
    getUser(email, password).then((resp) => {
      //console.log(resp);
      if (resp.length === 0) {
        setErrorText("El correo o la contraseña son incorrectos");
        setError(true);
      } else {
        storeData(resp[0]).then(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Tablero" }],
          });
        });
      }
    });
  };

  return (
    <View style={page.container}>
      <Text style={page.logo}>Iniciar sesión</Text>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Correo"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={page.inputView}>
        <TextInput
          secureTextEntry
          style={page.inputText}
          placeholder="Contraseña"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={page.forgot}>
          {error ? <Badge title={errorText}></Badge> : null}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={page.loginBtn} onPress={() => logIn()}>
        <Text style={page.loginText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigateSignUp()}>
        <Text style={page.signUpText}>Registro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
