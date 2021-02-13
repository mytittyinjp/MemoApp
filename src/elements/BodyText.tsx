import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BodyText: React.FC = (props) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#DDD",
    backgroundColor: "#eee",
  },
});

export default BodyText;
