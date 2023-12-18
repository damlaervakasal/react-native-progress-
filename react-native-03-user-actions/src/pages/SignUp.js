import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

function SignUp({ navigation }) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userEmail) {
      Alert.alert("If you want to become a member", "Please fill all fields!");
      return;
    }

    if (!isValidEmail(userEmail)) {
      Alert.alert("Invalid email", "Please enter a valid email address!");
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userEmail,
    };
    navigation.navigate("SignUpResults", { user });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ImageBackground
        style={styles.imageBackground}
        source={require("./assets/background.jpg")}
      >
        <View style={styles.container_input}>
          <Input
            label=" Member Name"
            placeholder="Input member name..."
            onChangeText={setUserName}
          />
          <Input
            label=" Member Surname"
            placeholder="Input member surname..."
            onChangeText={setUserSurname}
          />
          <Input
            label=" Member Age"
            placeholder="Input member age..."
            onChangeText={setUserAge}
          />
          <Input
            label=" Member e-mail"
            placeholder="Input member e-mail..."
            onChangeText={setUserEmail}
          />

          <Button text="Sign Up" onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
  },
  container_input: {
    flex: 1,
    paddingTop: 50,
  },
});

export default SignUp;
