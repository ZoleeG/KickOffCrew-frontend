import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './components/AppStack'
import AuthStack from './components/AuthStack'

function App() {
  return (
    <NavigationContainer>
      {/* <AppStack/> */}
      <AuthStack/>
    </NavigationContainer>
  );
}

export default App;
