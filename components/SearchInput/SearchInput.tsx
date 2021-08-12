import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./SearchInput.style";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchInput = (props: any) => {
  const handleChange = (coordenates: any) => {
    props.onChange(coordenates);
  };

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="¿En donde necesitas tu lugar?"
        fetchDetails={true}
        onPress={(data, details: any) => {
          // 'details' is provided when fetchDetails = true
          //console.log(details.geometry.location);
          handleChange(details.geometry.location);
        }}
        query={{
          key: "AIzaSyAzm7z1Vn8yZyPLs0rHwdWM6GxzLgaUE6A",
          language: "es",
          types: "(cities)",
          components: "country:mx",
        }}
        textInputProps={{ placeholderTextColor: "#ffffff" }}
        styles={{
          textInput: {
            height: 60,
            color: "#ffffff",
            fontSize: 16,
            backgroundColor: "#8ACC4B",
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
          row: {
            backgroundColor: "#ededed",
            padding: 13,
            height: 44,
            flexDirection: "row",
          },
        }}
      />
    </View>
  );
};

export default SearchInput;
