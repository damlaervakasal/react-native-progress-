import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const [helloFlag, setHelloFlag] = useState(true);

  useEffect(() => {
    console.log("Component did mount");
  }, []);

  useEffect(() => {
    console.log("number updated..", number);
  }, [setNumber]);

  useEffect(() => {
    console.log("Counter updated..", counter);
  }, [counter]);

  function updateHelloFlag() {
    setHelloFlag(!helloFlag);
  }

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 50 }}>{number}</Text>
      <Button title="Up" onPress={() => setNumber(number + 1)} />
      <Button title="Down" onPress={() => setNumber(number - 1)} />
      <Text style={{ fontSize: 50 }}>{counter}</Text>
      <Button title="Up" onPress={() => setCounter(counter + 1)} />
      <Button title="Down" onPress={() => setCounter(counter - 1)} />

      <Button title="knock knock" onPress={updateHelloFlag} />
      {helloFlag && <Hello />}
    </SafeAreaView>
  );
}

export default App;

function Hello() {
  useEffect(() => {
    console.log("Hello");

    // cleanup
    return () => {
      console.log("bye");
    };
  }, []);

  return (
    <View style={{ backgroundColor: "pink", padding: 10 }}>
      <Text style={{ fontSize: 30 }}>hello 'Hello' component </Text>
    </View>
  );
}
