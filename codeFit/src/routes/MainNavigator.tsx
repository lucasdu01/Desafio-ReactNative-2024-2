import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NavBar } from '../components/Navbar'; // Suas rotas com o Bottom Tab Navigator
import Login from '../pages/LoginPage'; // Sua tela de login

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}