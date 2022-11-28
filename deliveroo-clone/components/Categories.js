import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { ImagesToShow } from "../constants";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl={ImagesToShow[1].uri} title={"Testing"} />
      <CategoryCard imgUrl={ImagesToShow[2].uri} title={"Testing"} />
      <CategoryCard imgUrl={ImagesToShow[3].uri} title={"Testing"} />
      <CategoryCard imgUrl={ImagesToShow[4].uri} title={"Testing"} />
      <CategoryCard imgUrl={ImagesToShow[5].uri} title={"Testing"} />
      <CategoryCard imgUrl={ImagesToShow[6].uri} title={"Testing"} />
    </ScrollView>
  );
};

export default Categories;
