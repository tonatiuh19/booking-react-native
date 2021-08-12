import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { page } from "./Badge.style";

const Badge = (props: any) => {
  return (
    <View style={page.container}>
      <Text style={page.badgeTitle}>{props.title}</Text>
    </View>
  );
};

export default Badge;
