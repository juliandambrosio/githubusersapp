import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PersonScreen } from '../screens/PersonScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: 'white'
        }
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
}