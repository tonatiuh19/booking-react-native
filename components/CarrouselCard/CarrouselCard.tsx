import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { page } from "./CarrouselCard.style";
import Carousel, { Pagination } from "react-native-x2-carousel";

const CarrouselCard = (props: any) => {
  const renderItem = (data: any) => (
    <View key={data.id} style={props.bordingStyle ? page.item : null}>
      <Text>
        <Image
          style={page.tinyPicture}
          source={{
            uri: data.url,
          }}
        />
      </Text>
    </View>
  );

  return (
    <Carousel
      pagination={Pagination}
      renderItem={renderItem}
      autoplay={true}
      autoplayInterval={4800}
      data={props.images}
    />
  );
};

export default CarrouselCard;
