import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MemoList: React.FC = () => {
  return (
    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2021/02/11</Text>
      </View>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2021/02/11</Text>
      </View>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2021/02/11</Text>
      </View>
    </View>
  );
};

export default MemoList;

const styles = StyleSheet.create({
  memoList: {
    width: "100%",
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: "#a2a2a2",
  },
});
