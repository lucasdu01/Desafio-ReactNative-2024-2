import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { styles } from '../styles/gerenciamentoStyles';

import TopBar from '../components/TopBar';
import { data } from '../components/data';
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
        data={data}
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