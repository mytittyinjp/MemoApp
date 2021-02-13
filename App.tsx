import React from "react";
import { StyleSheet, View } from "react-native";
import Appbar from "./src/components/Appbar";
import SignupScreen from "./src/screens/SignupScreen";

const memoDetail = {
  title: "講座のアイテム",
  date: new Date(),
  content: "講座の内容",
};

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar title="MEMOT" />
      {/* <MemoDetailScreen {...memoDetail} /> */}
      <SignupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 78,
  },
});
