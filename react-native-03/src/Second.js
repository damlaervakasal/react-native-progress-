import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Second(props) {
  console.log(props);

  const user = props.route.params.username;
  function backToFirst() {
    props.navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Second</Text>
      <Text>{user}</Text>
      <Button title="Go back" onPress={backToFirst} />
    </View>
  );
}

export default Second;

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
