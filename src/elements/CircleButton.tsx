import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

type IconNameType = "plus" | "edit";

type CircleButtonProps = {
  name: IconNameType;
  color?: string;
  style?: any;
};

type CustomIconProps = {
  name: IconNameType;
  size: number;
  color: string;
};

const CircleButton: React.FC<CircleButtonProps> = (props) => {
  const { name, color, style } = props;

  const bgColor = color === "white" ? "#fff" : "#E31767";
  const textColor = color === "white" ? "#E31767" : "#fff";

  return (
    <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
      <CustomIcon name={name} size={24} color={textColor} />
    </View>
  );
};

const CustomIcon: React.FC<CustomIconProps> = (props) => {
  const { name, size, color } = props;
  switch (name) {
    case "plus":
      return <Entypo name="plus" size={size} color={color} />;
    case "edit":
      return <MaterialIcons name="edit" size={size} color={color} />;
  }
};

const styles = StyleSheet.create({
  circleButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    textShadowRadius: 3,
  },
});

export default CircleButton;
