import { useState, useCallback, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../styles/homeStyles';
import { getTreinos } from '../services/treinoServices';
import { useFocusEffect, } from '@react-navigation/native';

import TopBar from '../components/TopBar';
import ModalView from '../modals/modalView';

export default function Home() {
  const [visibleModalView, setVisibleModalView] = useState(false);
  const [treinoSelecionado, setTreinoSelecionado] = useState();
  const [treinos, setTreinos] = useState([]);

  const carregarTreinos = async () => {
    try {
      const response = await getTreinos();
      setTreinos(response.slice(0,4));
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
  
  // Renderizar um item do carrossel
  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity key={index} onPress={() => { setTreinoSelecionado(item); setVisibleModalView(true); }}>
        <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreinoPrincipal} />
      </TouchableOpacity>
    );
  };
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
          {treinos.map((treino, index) => (
              <TouchableOpacity key={index} onPress={() => { setTreinoSelecionado(treino); setVisibleModalView(true); }}>
                <Image source={require('../../assets/images/iconsHome/CardTreinoOmbro.png')} style={styles.cardTreino} />
              </TouchableOpacity>
            ))}
            </View>
          </View>

          <ModalView
            modalVisible={visibleModalView}
            setModalVisible={setVisibleModalView}
            treino={treinoSelecionado}
          />

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