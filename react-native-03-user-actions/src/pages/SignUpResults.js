import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

function SignUpResults({ route }) {
  const { user } = route.params;
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("./assets/background.jpg")}
      >
        <View style={styles.container_text}>
          <Text style={styles.message}>Kayıt Tamamlandı</Text>
          <Text style={styles.label}> Member Name: {user.userName}</Text>
          <Text style={styles.label}> Member Surname: {user.userSurname}</Text>
          <Text style={styles.label}> Member Age: {user.userAge}</Text>
          <Text style={styles.label}> Member Email: {user.userEmail}</Text>
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
  container_text: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    color: "grey",
  },
  message: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 5,
    color: "white",
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 30,
  },
});

export default SignUpResults;
