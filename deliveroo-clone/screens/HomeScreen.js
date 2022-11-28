import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImagesToShow } from "../constants";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Categories } from "../components";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  React.useState(() => {
    sanityClient
      .fetch(
        `
      *[_type == 'featured'] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* <StatusBar style="auto" /> */}
      {/* Header */}
      <View className="flex-row items-center pb-3 mx-3 space-x-2">
        <Image
          source={{
            uri: ImagesToShow[0].uri,
          }}
          className="h-10 w-10 p-4 bg-gray-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-lg">
            Current Location
            <FontAwesome
              name="chevron-down"
              color={"#00CCBB"}
              size={20}
            ></FontAwesome>
          </Text>
        </View>

        <FontAwesome name="user" color={"#00CCBB"} size={35}></FontAwesome>
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200">
          <FontAwesome name="search" color={"#808080"} size={20}></FontAwesome>
          <TextInput placeholder="Restaurants..." keyboardType="default" />
        </View>
        <Ionicons name="options" color={"#00CCBB"} size={20}></Ionicons>
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories  */}
        <Categories />

        {/* Featured Row */}
        {featuredCategories?.map((category) => {
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />;
        })}

        <FeaturedRow
          id={"2"}
          title={"Tasty Discount"}
          description={"Paid Placements for our partners"}
        />
        <FeaturedRow
          id={"3"}
          title={"Offers Near You"}
          description={"Paid Placements for our partners"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
