import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/topBarStyles';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationLogout } from '../routes';



type TabParamList = {
  Contato: undefined;
  Home: undefined;
  Gerenciamento: undefined;
  Login: undefined;
};

const TopBar = () => {
  <NavigationLogout/>
  const navigationHome = useNavigation<BottomTabNavigationProp<TabParamList, 'Home'>>();
  const navigationLogout = useNavigation<StackNavigationProp<TabParamList, 'Login'>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={ () => navigationHome.navigate('Home') }>
          <Image 
            source={require('../../assets/images/iconsTopbar/imgLogoCode.png')} 
            style={styles.iconButton} 
          />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconButton} onPress={ () => navigationLogout.navigate('Login') }>
          <Image 
            source={require('../../assets/images/iconsTopbar/imgLogout.png')} 
            style={styles.iconButton} 
          />
      </TouchableOpacity>
    </View>
  );
};


export default TopBar;