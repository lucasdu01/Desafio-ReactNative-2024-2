import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles/homeStyles';

import TopBar from '../components/TopBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar/>
      <ScrollView>
        <Text style={styles.title}>CodeFit</Text>

        <View style={styles.sectionIntroContent}>
          <Text style={styles.sectionIntro}>
            O CodeFit é o seu app para guiar e auxiliar seus treinos na academia, ajudando você a alcançar seus objetivos de fitness.
          </Text>
        </View>

        <View style={styles.sectionDestaques}>
          <Text style={styles.sectionTitle}>Destaques</Text>
          <View style={styles.sectionDestaquesContent}>
            <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreino} />
            <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreino} />
            <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreino} />
            <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreino} />
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Treinos Disponíveis</Text>
            <View style={styles.sectionTreinosContent}>
              <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreinoSec} />
              <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreinoPrincipal} />
              <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreinoSec} />
            </View>
        </View>
      </ScrollView>
    </View>
  );
}