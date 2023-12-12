import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Card from "./components/Card";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Card title="Bob marley" text="speak" />
      <Card title="kanye west" text="never give up" />
      <Card title="joji" text="die for you" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    paddingTop: 30,
  },
});

export default App;
