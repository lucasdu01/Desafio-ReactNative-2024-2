import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/contatoStyles';

import TopBar from '../components/TopBar';

export default function ContactScreen() {
  return (
    
    <View style={styles.container}>
    <TopBar/>
      <Text style={styles.title}>Contato</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Endereço</Text>
        <Text style={styles.sectionContent}>
          Campus Universitário, Rua José Lourenço Kelmer, s/n - São Pedro,{'\n'}
          Juiz de Fora - MG, 36036-900
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Telefones</Text>
        <View style={styles.phoneContainer}>
          <Text style={styles.phoneItem}>(32) 98888-7777</Text>
          <Text style={styles.phoneItem}>(32) 96666-5555</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Redes Sociais</Text>
        <View style={styles.socialMediaContainer}>
          <Image source={require('../../assets/images/iconsContato/iconLinkedin.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/images/iconsContato/iconInstagram.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/images/iconsContato/iconFacebook.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/images/iconsContato/iconTwitter.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/images/iconsContato/iconWhatsApp.png')} style={styles.socialIcon} />
        </View>
      </View>
    </View>
  );
}
