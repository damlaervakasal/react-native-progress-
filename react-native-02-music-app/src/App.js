import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [list, setList] = useState(music_data);

  const renderSong = ({ item }) => <SongCard song={item}></SongCard>;

  const renderSeparator = () => <View style={styles.separator} />;

  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SearchBar onSearch={handleSearch} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  separator: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});
