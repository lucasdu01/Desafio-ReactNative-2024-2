import { useState, useCallback } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/homeStyles';
import { getTreinos } from '../services/treinoServices';
import { useFocusEffect } from '@react-navigation/native';

import TopBar from '../components/TopBar';
import ModalView from '../modals/modalView';

export default function Home() {
  const [visibleModalView, setVisibleModalView] = useState(false);
  const [treinoSelecionado, setTreinoSelecionado] = useState();
  const [treinos, setTreinos] = useState([]);
  
  const carregarTreinos = async () => {
    try {
      const response = await getTreinos();
      setTreinos(response);
    } catch (error) {
      console.error("Erro ao carregar treinos:", error);
    }
  };

  // Chamar carregarTreinos quando o componente for montado
  useFocusEffect(
    useCallback(() => {
      carregarTreinos();
    }, [])
  );

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
            {treinos.slice(0, 4).map((treino, index) => (
              <TouchableOpacity key={index} onPress={() => { setTreinoSelecionado(treino); setVisibleModalView(true); }}>
                <Image source={require('../../assets/images/iconsHome/CardTreino.png')} style={styles.cardTreino} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.sectionTitle}>Treinos Disponíveis</Text>
          <Image source={require('../../assets/images/iconsHome/CardTreino.png')} style={styles.cardTreino} />
        </View>

        <ModalView
          modalVisible={visibleModalView}
          setModalVisible={setVisibleModalView}
          treino={treinoSelecionado}
        />
      </ScrollView>
    </View>
  );
}
