import { View, Text, ScrollView } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import RestaurantCard from "./RestaurantCard";
import { ImagesToShow } from "../constants";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  const fetchData = () => {
    return sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      },
    }[0]`,
        { id: id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
        setFeatured(data);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  };

  React.useState(() => {
    fetchData();
  }, [id]);

  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" color={"#00CCBB"} size={20}></AntDesign>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0 }}
        className="px-4"
      >
        {/* Restaurants Cards */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            short_description={featured.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
