import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

  const Stack = createNativeStackNavigator();

export default function AppStack(){
    return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: true}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: true}} />
    </Stack.Navigator>
    )
}