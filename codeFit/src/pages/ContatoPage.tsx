import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../styles/contatoStyles';
import TopBar from '../components/TopBar';

const openLink = (url) => {
  Linking.openURL(url).catch(err => console.error("Erro ao abrir URL:", err));
};

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

          <TouchableOpacity onPress={ () => openLink('https://www.linkedin.com/company/codejr')}>
            <Image source={require('../../assets/images/iconsContato/iconLinkedin.png')} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.instagram.com/codejr')}>
            <Image source={require('../../assets/images/iconsContato/iconInstagram.png')} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.facebook.com/codeempresajunior')}>
            <Image source={require('../../assets/images/iconsContato/iconFacebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.twitter.com')}>
            <Image source={require('../../assets/images/iconsContato/iconTwitter.png')} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://w.app/codefit')}>
            <Image source={require('../../assets/images/iconsContato/iconWhatsApp.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
