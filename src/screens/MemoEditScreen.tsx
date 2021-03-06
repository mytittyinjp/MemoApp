import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import CircleButton from "../elements/CircleButton";

const MemoEditScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.memoEditInput} value="hi" multiline />
      <CircleButton name="check" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoEditInput: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
});

export default MemoEditScreen;
