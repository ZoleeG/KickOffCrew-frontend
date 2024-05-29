import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "./CustomButton";
import { postUser } from "../../utils/ApiRequests";
import { Feather } from "@expo/vector-icons";

function RegistrationScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [avatar_url, setAvatar_url] = useState("");
  const [age, setAge] = useState(0);
  const [interests, setInterests] = useState("");

  const signUp = async () => {
    setIsLoading(true);

    try {
      const userCreated = await postUser(
        username,
        first_name,
        last_name,
        +age,
        avatar_url,
        interests
      );
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Check your email");
    } catch (error) {
      alert("SignUp failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <View
            style={{
              paddingHorizontal: 25,
              marginBottom: 60,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/images/badminton.jpg")}
                style={{ width: "120%" }}
              />
            </View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
                color: "#333",
                marginBottom: 30,
              }}
            >
              Register
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  borderColor: "#ddd",
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}
              >
                <Image
                  source={require("../assets/images/google-icon.png")}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                style={{
                  borderColor: "#ddd",
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}
              >
                <Image
                  source={require("../assets/images/facebook-icon.png")}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                style={{
                  borderColor: "#ddd",
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}
              >
                <Image
                  source={require("../assets/images/twitter-icon.png")}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}
            >
              {
                <MaterialIcons
                  name="alternate-email"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              <TextInput
                value={email}
                style={{ flex: 1 }}
                placeholder="email-address"
                keyboardType="Email"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}
            >
              <AntDesign
                name="lock"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />

              <TextInput
                style={{ flex: 1 }}
                secureTextEntry={hidePassword}
                value={password}
                placeholder={"password"}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                inputType="password"
              />
              {hidePassword ? (
                <Feather
                  onPress={() => {
                    setHidePassword(!hidePassword);
                  }}
                  name="eye"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              ) : (
                <Feather
                  onPress={() => {
                    setHidePassword(!hidePassword);
                  }}
                  name="eye-off"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              )}
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}
            >
              {
                <Feather
                  name="user"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              <TextInput
                value={username}
                style={{ flex: 1 }}
                placeholder="username"
                keyboardType="username"
                autoCapitalize="none"
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}
            >
              <TextInput
                style={{ flex: 1 }}
                value={first_name}
                placeholder={"first-name"}
                onChangeText={(text) => setFirst_name(text)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}
            >
              <TextInput
                value={last_name}
                style={{ flex: 1 }}
                placeholder="last-name"
                onChangeText={(text) => setLast_name(text)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}
            >
              <TextInput
                style={{ flex: 1 }}
                value={avatar_url}
                placeholder={"avatarURL"}
                onChangeText={(text) => setAvatar_url(text)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}
            >
              <TextInput
                style={{ flex: 1 }}
                value={age}
                placeholder={"age"}
                onChangeText={(text) => setAge(text)}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}
            >
              <TextInput
                style={{ flex: 1 }}
                value={interests}
                placeholder={"interests"}
                onChangeText={(text) => setInterests(text)}
              />
            </View>
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <>
                <CustomButton label={"Sign Up"} onPress={signUp} />
              </>
            )}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text>Already registered? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegistrationScreen;
