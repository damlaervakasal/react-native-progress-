import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

function App() {
  // promise cozumleme ---- then&catch

  // function fetchData() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // }
  // cevap gelinceye kadar beklemiyor. cagrıyı atip direkt alt satira iniyor.

  // promise cozumleme ---- asyn&await
  async function fetchData() {
    console.log("1");

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("3");
    console.log(response);

    console.log("2");
  }
  // burada 1 bekle 3 2 cıktısını verir yani bana cevabin dönmesi için
  // cevap gelinceye kadar bekletiyorum. cevap geldikten sonra alt satira geciyor.

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

// birinin diğerine gore avantajı yoktur.
// kod blogunu bekletmek istemiyorsak thencatch,
// beklemek zorundaysak async&await kullanmak daha dogrudur.
