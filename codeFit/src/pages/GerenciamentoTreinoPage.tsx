import { Image, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../styles/gerenciamentoStyles';

import TopBar from '../components/TopBar';

const data = [
  { id: '1', treino: 'Abdômen', criadoEm: '05/08/2024' },
  { id: '2', treino: 'Bíceps', criadoEm: '05/08/2024' },
  { id: '3', treino: 'Costas', criadoEm: '05/08/2024' },
  { id: '4', treino: 'Ombro', criadoEm: '05/08/2024' },
  { id: '5', treino: 'Panturrilha', criadoEm: '05/08/2024' },
  { id: '6', treino: 'Quadríceps', criadoEm: '05/08/2024' },
  { id: '7', treino: 'Tríceps', criadoEm: '05/08/2024' },
];

const renderRow = ({ item }) => (
  <View style={styles.row}>
    <Text style={styles.cell}>{item.treino}</Text>
    <Text style={styles.cell}>{item.criadoEm}</Text>
    <View style={styles.actionsCell}>
      <TouchableOpacity onPress={() => alert('Visualizar')}>
        <Image source={require("../../assets/images/iconsGerenciamento/iconView.png")} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Editar')}>
        <Image source={require("../../assets/images/iconsGerenciamento/iconEdit.png")} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Excluir')}>
        <Image source={require("../../assets/images/iconsGerenciamento/iconDelete.png")} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar/>
      <ScrollView>
        <Text style={styles.title}>Gerenciamento</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/iconsGerenciamento/iconAdd.png')} style={styles.buttonAdd}/>
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={renderRow}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={ () => (
            <View style={styles.header}>
              <Text style={styles.headerText}>TREINO</Text>
              <Text style={styles.headerText}>CRIADO EM</Text>
              <Text style={styles.headerText}>AÇÕES</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}