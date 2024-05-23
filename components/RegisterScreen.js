import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FacebookSVG from "./svgs/FacebookSVG";
import GoogleSVG from "./svgs/GoogleSVG";
import TwitterSVG from "./svgs/TwitterSVG";
import InputField from "./InputField";
import CustomButton from "./CustomButton";

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

function RegisterScreen({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [dobLabel, setdobLabel] = useState("Date of Birth");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setdobLabel(currentDate.toLocaleDateString());
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      display: "spinner",
      is24Hour: true,
      maximumDate: new Date(),
      minimumDate: new Date("1920-01-01"),
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{  }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/images/badminton.jpg")}
            style={{}}
          />
        </View>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
            paddingHorizontal: 25
          }}
        >
          Register
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
            paddingHorizontal: 25
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
            <GoogleSVG height={24} width={24} />
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
            <FacebookSVG height={24} width={24} />
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
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            marginBottom: 30,
            paddingHorizontal: 25
          }}
        >
          <Text
            style={{ textAlign: "center", color: "#666", marginBottom: 30 }}
          >
            Or Sign Up with your email ...
          </Text>

          <InputField
            label={"Full Name"}
            icon={
              <MaterialIcons
                name="person-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            label={"Email ID"}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
          />

          <InputField
            label={"Password"}
            icon={
              <AntDesign
                name="lock"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
          />

          <InputField
            label={"Confirm Password"}
            icon={
              <AntDesign
                name="lock"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
          />

          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 30,
            }}
          >
            <AntDesign
              name="calendar"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
            <TouchableOpacity onPress={showDatepicker} title="Date of Birth">
              <Text style={{ color: "#666", marginLeft: 5, marginTop: 5 }}>
                {dobLabel}
              </Text>
            </TouchableOpacity>
          </View>

          <CustomButton label={"Register"} onPress={() => {}} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 30,
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

export default RegisterScreen;
