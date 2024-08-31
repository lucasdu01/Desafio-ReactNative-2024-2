import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Button
        title="Home"
        //onPress={() => navigation.navigate('')}
      />
      <Button
        title="Logout"
        onPress={() => {
          // Lógica de logout, por exemplo, limpar tokens, etc.
          //navigation.navigate('index.tsx');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Navbar;
