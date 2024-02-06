import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

function App() {
  function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  return (
    <View style={styles.container}>
      <Text>Hello API</Text>
      <Button title="Fetch Data" onPress={fetchData} />
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
