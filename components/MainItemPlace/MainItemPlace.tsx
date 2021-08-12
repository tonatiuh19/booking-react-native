import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, RefreshControl } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CarrouselCard from "../CarrouselCard/CarrouselCard";
import MainListItem from "../MainListItem/MainListItem";
import { page } from "./MainItemPlace.style";
import { useNavigation } from "@react-navigation/native";

const MainItemPlace = (props: any) => {
  if (props.places.length > 0) {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
      return new Promise((resolve) => setTimeout(resolve, timeout));
    };

    const onNavigateCard = (item: any) => {
      navigation.navigate("PlaceDesc", {
        item: item,
      });
    };

    const onRefresh = React.useCallback(() => {
      props.onChange();
      wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
      <View style={page.container}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#547d2d"
              colors={["#547d2d"]}
            />
          }
          data={props.places}
          renderItem={({ item }: any) => {
            return (
              <View style={page.containerFlatList}>
                <View style={page.containerCarrousel}>
                  <CarrouselCard
                    images={item.images}
                    bordingStyle={true}
                  ></CarrouselCard>
                </View>
                <TouchableOpacity onPress={() => onNavigateCard(item)}>
                  <MainListItem
                    title={item.title}
                    price={item.price}
                    place={item.locationCity + ", " + item.locationState}
                    spaceType={item.type}
                  ></MainListItem>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  } else {
    return <Text>Sin lugares</Text>;
  }
};

export default MainItemPlace;
