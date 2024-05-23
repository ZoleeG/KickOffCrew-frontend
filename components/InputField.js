import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import RegistrationSVG from "./svgs/Registration";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FacebookSVG from "./svgs/FacebookSVG";
import GoogleSVG from "./svgs/GoogleSVG";
import TwitterSVG from "./svgs/TwitterSVG";

function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction
}) {
  return (
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
        }}
      >
        {icon}
        {inputType === "password" ? (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />
        ) : (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0 }}
          />
        )}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{ color: "#AD40AF", fontWeight: "700" }}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      </View>
  );
}

export default InputField;
