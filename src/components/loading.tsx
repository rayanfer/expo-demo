import React from "react";
import { Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Loading() {
  return (
    <View className="flex flex-1 bg-blue-500 items-center justify-center">
      <FontAwesome
        name="spinner"
        size={24}
        color="white"
        className="animate-spin mb-4"
      />
      <Text>Please wait we are logging you in...</Text>
    </View>
  );
}
