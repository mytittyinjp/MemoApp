import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
  color?: string;
  style?: any;
};

const CircleButton: React.FC<Props> = (props) => {
  const { color, style, children } = props;

  const bgColor = color === "white" ? "#fff" : "#E31767";
  const textColor = color === "white" ? "#E31767" : "#fff";

  return (
    <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
      <Text style={[styles.circleButtonTitle, { color: textColor }]}>
        {children}
      </Text>
    </View>
  );
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
  circleButtonTitle: {
    fontSize: 35,
    lineHeight: 35,
  },
});

export default CircleButton;
