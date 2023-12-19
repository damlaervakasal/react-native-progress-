import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

function Member({ navigation }) {
  return (
    <SafeAreaView>
      <Text>HEllo member</Text>
      <Button
        title="detail"
        onPress={() => navigation.navigate("MemberDetailScreen")}
      />
    </SafeAreaView>
  );
}

export default Member;
