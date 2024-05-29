import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../components/RegistrationScreen";
import OnboardingScreen from "../components/OnboardingScreen";
import LoginScreen from "../components/LoginScreen";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
