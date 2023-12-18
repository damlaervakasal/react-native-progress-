import React from "react";
import { TextInput, Text, View } from "react-native";

import styles from "./Input.style";

function Input({ label, placeholder, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.text_Input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="rgb(224, 224, 224)"
        />
      </View>
    </View>
  );
}

export default Input;
