import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/topBarStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type TabParamList = {
  Login: undefined;
  Home: undefined;
};

const TopBar = () => {
  const navigationHome = useNavigation<StackNavigationProp<TabParamList, 'Home'>>();
  const navigationLogout = useNavigation<StackNavigationProp<TabParamList, 'Login'>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigationHome.navigate('Home')}>
        <Image 
          source={require('../../assets/images/iconsTopbar/imgLogoCode.png')} 
          style={styles.iconButton} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconButton} onPress={() => navigationLogout.navigate('Login')}>
        <Image 
          source={require('../../assets/images/iconsTopbar/imgLogout.png')} 
          style={styles.iconButton} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
