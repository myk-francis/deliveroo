import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { ImagesToShow } from "../constants";
import sanityClient from "../sanity";
import { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  const fetchData = () => {
    return sanityClient
      .fetch(`*[_type == "category"]`)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  };

  React.useState(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* CategoryCard */}
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
