import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  ScrollView,
  StyleSheet
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
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [ageError, setAgeError] = useState()
  const [interestsError, setInterestsError] = useState("")

  const signUp = async () => {
    setEmailError("")
    setPasswordError("")
    setUsernameError("")
    setFirstNameError("")
    setLastNameError("")
    setAgeError("")
    setInterestsError("")
    if (email.length === 0) {
      setEmailError("email cannot be blank")
    } else if (!password) {
      setPasswordError("password needs to be at least 6 digits")
    } else if (username.length === 0) {
      setUsernameError("username cannot be blank");
    } else if (first_name.length === 0) {
      setFirstNameError("first name cannot be blank");
    } else if (last_name.length === 0) {
      setLastNameError("last name cannot be blank");
    } else if (!age) {
      setAgeError("age cannot be blank")
    } else if (interests.length === 0) {
      setInterestsError("interests cannot be blank");
    } else {
      try {
        setIsLoading(true);
          const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const userCreated = await postUser(
            username,
            first_name,
            last_name,
            +age,
            avatar_url,
            interests
          );
          console.log("regscreen " + userCreated);
  
          alert("Check your email");
        }
        catch(err) {
        alert("SignUp failed: " + Error);
      } finally {
        setIsLoading(false);
      }
    }
   
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 25 }}>
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
             {{emailError} && <Text style={{color: "red"}}>{emailError}</Text>}
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
              secureTextEntry={true}
              value={password}
              placeholder={"password"}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              inputType="password"
            />
             {{passwordError} && <Text style={{color: "red"}}>{passwordError}</Text>}
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
           {{usernameError} && <Text style={{color: "red"}}>{usernameError}</Text>}
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
           {{firstNameError} && <Text style={{color: "red"}}>{firstNameError}</Text>}
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
           {{lastNameError} && <Text style={{color: "red"}}>{lastNameError}</Text>}
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
            />
            {{ageError} && <Text style={{color: "red"}}>{ageError}</Text>}
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
            {{interestsError} && <Text style={{color: "red"}}>{interestsError}</Text>}
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
              <Text style={{ color: "#AD40AF", fontWeight: "700" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegistrationScreen;
