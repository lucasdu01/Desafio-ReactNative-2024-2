// LoginScreen.js

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { styles } from '../styles/loginStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getUser, verificaExisteUser } from '../services/userServices';

type TabParamList = {
  Main: undefined;
  email: undefined;
  senha: undefined;
};

export default function LoginScreen() {
  const navigationHome = useNavigation<StackNavigationProp<TabParamList, 'Main'>>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [loading, setLoading] = useState(false);

  const authenticate = async () => {
    // Valida se os campos não estão vazios
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    setLoading(true);

    try {
      const response = await verificaExisteUser(email, senha);      
      if (response.success) {
        setEmail('');
        setSenha('');
        navigationHome.navigate('Main');
      }
    } catch (error) {
      Alert.alert('Erro de autenticação', error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <Text style={styles.label}>E-mail</Text>
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        placeholderTextColor="#FFF"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.inputSenha} 
          placeholder="Senha" 
          placeholderTextColor="#FFF"
          secureTextEntry={!mostrarSenha} // Alterna a visibilidade da senha
          value={senha} 
          onChangeText={text => setSenha(text)}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Image 
            style={styles.eyeIcon}
            source={mostrarSenha ? require('../../assets/images/iconsLogin/eyeOff.png') : require('../../assets/images/iconsLogin/eyeOn.png')} 
              
            />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={authenticate}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Entrando...' : 'Entrar'}</Text>
      </TouchableOpacity>
    </View>
  );
}
