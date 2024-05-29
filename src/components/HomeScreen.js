import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../../firebaseConfig";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{ marginBottom: 20, backgroundColor: "#AD40AF", padding: 8 }}
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
          Open Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 20, backgroundColor: "#AD40AF", padding: 8 }}
        onPress={() => {
          FIREBASE_AUTH.signOut();
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;