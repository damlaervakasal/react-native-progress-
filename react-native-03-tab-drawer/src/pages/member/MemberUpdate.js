import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

function MemberUpdate({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Hello Member Update</Text>
      <Button
        title="Edit"
        onPress={() =>
          navigation.navigate("Profile", { screen: "ProfileEditScreen" })
        }
      />
    </SafeAreaView>
  );
}

export default MemberUpdate;
