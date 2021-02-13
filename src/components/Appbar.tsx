import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
  title: string;
};
const Appbar: React.FC<Props> = (props) => {
  return (
    <View style={styles.appbar}>
      <View>
        <Text style={styles.appbarTitle}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: "#265366",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    textShadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Appbar;
