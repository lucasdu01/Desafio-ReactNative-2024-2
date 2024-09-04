import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/loginStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type TabParamList = {
  Main: undefined;
};

export default function LoginScreen() {
  const navigationHome = useNavigation<StackNavigationProp<TabParamList, 'Main'>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <Text style={styles.label}>E-mail</Text>
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        placeholderTextColor="#FFF"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#FFF"
        secureTextEntry 
      />

      <TouchableOpacity style={styles.button} onPress={ () => navigationHome.navigate('Main') }>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}