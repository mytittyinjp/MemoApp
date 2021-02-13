import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CircleButton: React.FC = (props) => {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonTitle}>{props.children}</Text>
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
    backgroundColor: "#E31767",
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
    color: "#fff",
    lineHeight: 35,
  },
});

export default CircleButton;
