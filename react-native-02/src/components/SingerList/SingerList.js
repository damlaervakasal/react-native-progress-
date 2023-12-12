import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  Button,
  FlatList,
  Switch,
} from "react-native";
import { StyleSheet } from "react-native";

const data = [
  { id: 0, name: "Joji", isFavorite: true },
  { id: 1, name: "Kanye West", isFavorite: false },
  { id: 2, name: "Lana Del Rey", isFavorite: false },
  { id: 3, name: "Cigarettes After Sex", isFavorite: false },
  { id: 4, name: "Yann Tiersen", isFavorite: false },
  { id: 5, name: "The Weekend", isFavorite: true },
];

function App() {
  const [singerList, setSingerList] = useState(data);
  const [showOnlyFav, setShowOnlyFav] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFav(isFavoriteSelected);
    isFavoriteSelected
      ? setSingerList(singerList.filter((singer) => singer.isFavorite))
      : setSingerList(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text>Show only Favorite</Text>
      </View>
      <Switch
        value={showOnlyFav}
        onValueChange={onFavoritesChange}
        style={styles.switch}
      />
      <FlatList
        data={singerList}
        renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    paddingTop: 30,
  },
  text: {
    fontSize: 25,
  },
});

export default App;
