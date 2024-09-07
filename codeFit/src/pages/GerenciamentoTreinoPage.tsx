import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../styles/gerenciamentoStyles';

import TopBar from '../components/TopBar';
import { getTreinos } from '../services/treinoServices';
import { renderRow } from '../components/renderRow';
import { updateTreino, deleteTreino } from '../services/treinoServices';

import ModalAdd from '../modals/modalAdd';
import ModalView from '../modals/modalView';
import ModalEdit from '../modals/modalEdit';
import ModalDelete from '../modals/modalDelete';

export default function GerenciamentoTreino() {
  const [visibleModalAdd, setVisibleModalAdd] = useState(false)
  const [visibleModalView, setVisibleModalView] = useState(false)
  const [visibleModalEdit, setVisibleModalEdit] = useState(false)
  const [visibleModalDelete, setVisibleModalDelete] = useState(false)
  const [treinos, setTreinos] = useState([]);
  const [treinoSelecionado, setTreinoSelecionado] = useState(null);

  const carregarTreinos = async () => {
    try {
      const response = await getTreinos();
      setTreinos(response);
    } catch (error) {
      console.error("Erro ao carregar treinos:", error);
    }
  };

  useEffect(() => {
    carregarTreinos();  // Carrega treinos ao montar o componente
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
        onTreinoAdicionado={carregarTreinos}
      />

      <FlatList
        data={treinos}
        renderItem={({ item }) =>
          renderRow({
            item, setTreinoSelecionado, carregarTreinos,
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
    {treinoSelecionado && (
      <>
        <ModalView
          modalVisible={visibleModalView}
          setModalVisible={setVisibleModalView}
          treino={treinoSelecionado}
        />
        <ModalEdit
          modalVisible={visibleModalEdit}
          setModalVisible={setVisibleModalEdit}
          treino={treinoSelecionado}
          onTreinoEditado={carregarTreinos}
        />
        <ModalDelete
          modalVisible={visibleModalDelete}
          setModalVisible={setVisibleModalDelete}
          treino={treinoSelecionado}
          onTreinoRemovido={carregarTreinos}
        />
      </>
      )}
    </View>
  );
}