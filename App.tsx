import React from "react";
import { StyleSheet, View } from "react-native";
import Appbar from "./src/components/Appbar";
import MemoEditScreen from "./src/screens/MemoEditScreen";

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
      <MemoEditScreen />
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
