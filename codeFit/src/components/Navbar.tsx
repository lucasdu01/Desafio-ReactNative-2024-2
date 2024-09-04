
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';

import Home from '../pages/HomePage';
import Gerenciamento from '../pages/GerenciamentoTreinoPage';
import Contato from '../pages/ContatoPage';

const Tab = createBottomTabNavigator();

export function NavBar(){
  return(
    <Tab.Navigator 
      initialRouteName='Home'
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
        }}
      />   

      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarActiveTintColor: '#FFCE07',
          tabBarIcon: () => (
            <Entypo name="home" color="#FFCE07" size={30}/>
          )
        }}
      />   

      <Tab.Screen 
        name="Gerenciamento" 
        component={Gerenciamento} 
        options={{
          tabBarActiveTintColor: '#FFCE07',
          tabBarIcon: () => (
            <Entypo name="text-document" color="#FFCE07" size={30}/>
          )
        }}
      />

    </Tab.Navigator>
  )
}