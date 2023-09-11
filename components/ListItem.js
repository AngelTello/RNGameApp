import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../utils/Dimensions";

export default function ListItem({ title, subtitle, poster, isFree, price }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          source={poster}
          style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
        />
        <View style={{ width: windowWidth - 220 }}>
          <Text
            style={{ color: "#333", fontFamily: "Roboto-Medium", fontSize: 14 }}
          >
            {subtitle}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: "#333",
              fontFamily: "Roboto-Medium",
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#0aada8",
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "Roboto-Medium",
            fontSize: 14,
          }}
        >
          {isFree == "Yes" ? "Play" : price}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
