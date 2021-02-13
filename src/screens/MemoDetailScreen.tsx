import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CircleButton from "../elements/CircleButton";

type Props = {
  title: string;
  date: Date;
  content: string;
};

const MemoDetailScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <View>
          <Text style={styles.memoHeaderTitle}>{props.title}</Text>
          <Text style={styles.memoHeaderDate}>{props.date.toDateString()}</Text>
        </View>
      </View>
      <View style={styles.memoContent}>
        <Text style={styles.memoContentText}>{props.content}</Text>
      </View>
      <CircleButton name="edit" color="white" style={styles.editButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#17313C",
    justifyContent: "center",
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: "#fff",
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  memoContentText: {},
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
