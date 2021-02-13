import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";

const SignupScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableHighlight
        style={styles.button}
        underlayColor="#C70F66"
        onPress={() => {}}
      >
        <Text style={styles.buttonTitle}>SignIn</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    alignSelf: "center",
    marginBottom: 24,
    fontSize: 28,
  },
  input: {
    backgroundColor: "#ddd",
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 8,
  },
  button: {
    backgroundColor: "#E31767",
    height: 46,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 18,
  },
});

export default SignupScreen;
