
import { StyleSheet } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Entypo } from '@expo/vector-icons';

import Home from '../pages/HomePage';
import Gerenciamento from '../pages/GerenciamentoTreinoPage';
import Contato from '../pages/ContatoPage';

const Tab = createBottomTabNavigator();

export function NavBar(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarLabel: ()=> null,
          tabBarStyle:{
            backgroundColor: '#3B1B4D',
            paddingBottom: 0,
            paddingTop:0,
            
          }
        }}>

        <Tab.Screen 
          name="Contato" 
          component={Contato} 
          options={{
            tabBarActiveTintColor: '#FFCE07',
            tabBarIcon: () => (
              <Entypo name="phone" color="#FFCE07" size={30} />
            )
          }}/>

        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarActiveTintColor: '#FFCE07',
            tabBarIcon: () => (
              <Entypo name="home" color="#FFCE07" size={30}/>
            )
          }}/>

        <Tab.Screen 
          name="Gerenciamento" 
          component={Gerenciamento} 
          options={{
            tabBarActiveTintColor: '#FFCE07',
            tabBarIcon: () => (
              <Entypo name="text-document" color="#FFCE07" size={30}/>
            )
          }}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

import Login from '../pages/LoginPage';

const Stack = createStackNavigator();

export function NavigationLogout() {
  return(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator> 
  )
}