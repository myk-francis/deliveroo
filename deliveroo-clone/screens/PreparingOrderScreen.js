import { View, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  return (
    <View className="bg-[#00CCBB] flex-1 items-center justify-center">
      <Animatable.Image
        source={require("../assets/rocket.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-center text-white font-bold text-lg my-10"
      >
        Waiting for restaurant to accept your order
      </Animatable.Text>

      {/* <Progress.Circle size={60} indeterminate={true} color={"white"} /> */}
    </View>
  );
};

export default PreparingOrderScreen;
