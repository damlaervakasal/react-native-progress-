import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

function App() {
  function fetchData() {
    const response = axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
  }
  return (
    <View style={styles.container}>
      <Text>Hello Users</Text>
      <Button title="Get Users" onPress={fetchData} />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
