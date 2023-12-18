import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Button from "../components/Button";

function Welcome({ navigation }) {
  function goToSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("./assets/background.jpg")}
      >
        <Text style={styles.header}>Welcome</Text>
        <Button text="Sign Up" onPress={goToSignUp} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    color: "rgb(224, 224, 224)",
  },
});

export default Welcome;
