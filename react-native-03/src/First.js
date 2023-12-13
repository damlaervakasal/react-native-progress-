import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function First(props) {
  console.log(props);
  function navigateToPage() {
    props.navigation.navigate("Second", { username: "deymil" });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello first</Text>
      <Button title="Go to second" onPress={navigateToPage} />
    </View>
  );
}

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
