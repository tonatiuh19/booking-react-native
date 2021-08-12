import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./SearchInputNew.style";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchInputNew = (props: any) => {
  const handleChange = (coordenates: any) => {
    props.onChange(coordenates);
  };

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="¿En donde estará tu lugar?"
        fetchDetails={true}
        onPress={(data, details: any) => {
          // 'details' is provided when fetchDetails = true
          handleChange(details);
        }}
        query={{
          key: "AIzaSyAzm7z1Vn8yZyPLs0rHwdWM6GxzLgaUE6A",
          language: "es",
          types: "(cities)",
          components: "country:mx",
        }}
        textInputProps={{ placeholderTextColor: "#030000" }}
        styles={{
          textInput: {
            height: 60,
            color: "#030000",
            fontSize: 20,
            borderRadius: 15,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
          row: {
            backgroundColor: "#ffffff",
            padding: 13,
            height: 44,
            flexDirection: "row",
          },
        }}
      />
    </View>
  );
};

export default SearchInputNew;
