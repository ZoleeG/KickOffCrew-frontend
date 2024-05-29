import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import {AuthProvider} from "./src/context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user)
      setUser(user)
    })
  }, [])
  
  return (
    <AuthProvider>
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
