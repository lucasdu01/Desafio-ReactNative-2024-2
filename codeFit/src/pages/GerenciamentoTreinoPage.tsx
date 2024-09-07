import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../styles/gerenciamentoStyles';

import TopBar from '../components/TopBar';
import { fetchTreinos } from '../services/treinoServices';
import { renderRow } from '../components/renderRow';

import ModalAdd from '../modals/modalAdd';
import ModalView from '../modals/modalView';
// import ModalEdit from '../modals/modalEdit';
// import ModalDelete from '../modals/modalDelete';

export default function GerenciamentoTreino() {
  const [visibleModalAdd, setVisibleModalAdd] = useState(false)
  const [visibleModalView, setVisibleModalView] = useState(false)
  const [visibleModalEdit, setVisibleModalEdit] = useState(false)
  const [visibleModalDelete, setVisibleModalDelete] = useState(false)

  const [treinos, setTreinos] = useState([]);
  useEffect(() => {
    const carregarTreinos = async () => {
      try {
        const response = await fetchTreinos();
        setTreinos(response);
      } catch (error) {
        console.error("Erro ao carregar treinos:", error);
      }
    };
  
    carregarTreinos();
  }, []);
 
  return (
    <View style={styles.container}>
      <TopBar/>
      <Text style={styles.title}>Gerenciamento</Text>

      <TouchableOpacity onPress={() => setVisibleModalAdd(true)}>
        <Image source={require('../../assets/images/iconsGerenciamento/iconAdd.png')} style={styles.buttonAdd}/>
      </TouchableOpacity>

      <ModalAdd 
        modalVisible={visibleModalAdd}
        setModalVisible={setVisibleModalAdd}
      />

      <FlatList
        data={treinos}
        renderItem={({ item }) =>
          renderRow({
            item,
            visibleModalView, setVisibleModalView,
            visibleModalEdit, setVisibleModalEdit,
            visibleModalDelete, setVisibleModalDelete,
          })}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ () => (
          <View style={styles.header}>
            <Text style={styles.headerText}>TREINO</Text>
            <Text style={styles.headerText}>CRIADO EM</Text>
            <Text style={styles.headerText}>AÇÕES</Text>
          </View>
        )}
      />
    </View>
  );
}