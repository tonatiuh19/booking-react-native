import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { page } from "./SignUp.style";
import { useNavigation } from "@react-navigation/native";
import Badge from "../../components/Badge/Badge";
import { insertUser } from "../../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onNavigateSignIn = () => {
    navigation.navigate("SignIn");
  };

  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const signUp = () => {
    if (
      name.length === 0 ||
      lname.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      setError(true);
      return;
    }
    setError(false);

    insertUser(email, name, lname, password).then((resp) => {
      storeData(resp).then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Tablero" }],
        });
      });
    });
  };

  return (
    <View style={page.container}>
      <Text style={page.logo}>Registro</Text>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Nombre"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Apellido"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setLname(text)}
        />
      </View>

      <View style={page.itemSeparatorRule}></View>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Correo"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
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
      {error ? <Badge title="Completa todos los campos"></Badge> : null}
      <TouchableOpacity style={page.loginBtn} onPress={() => signUp()}>
        <Text style={page.loginText}>Registrarme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigateSignIn()}>
        <Text style={page.signUpText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={page.termsText}>
          Al registrarme acepto Terminos y condiciones, ademas del Aviso de
          privacidad.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
