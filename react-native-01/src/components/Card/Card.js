import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import styles from "./Card.styles";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card_body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.button_container}
        onPress={() => Alert.alert("hello" + " " + props.title)}
      >
        <Text style={styles.button_title}>I liked</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
