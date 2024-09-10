import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../styles/modalStyles';

const openLink = (url) => {
  Linking.openURL(url).catch(err => console.error("Erro ao abrir URL:", err));
};

type ModalViewProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  treino: any;
};


export default function ModalView({ modalVisible, setModalVisible, treino }: ModalViewProps) {
  if (!treino) {
    return null; // Não renderize o modal se `treino` for inválido
  }
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {setModalVisible(!modalVisible)}}
    >
    <View style={styles.modalBackground}>
      <View style={styles.modalLayout}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>X</Text>
        </TouchableOpacity>
        <Text style={styles.modalTitle}>Treino</Text>
        
        {/* Tipo e Carga */}
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tipo:</Text>
            <TextInput editable={false} style={styles.input} placeholder={treino.tipo}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Carga:</Text>
            <TextInput editable={false} style={styles.input} placeholder={treino.carga}/>
          </View>
        </View>
        
        {/* Repeticoes e Tempo */}
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Repetições:</Text>
            <TextInput editable={false} style={styles.input} placeholder={treino.repeticoes}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tempo:</Text>
            <TextInput editable={false} style={styles.input} placeholder={treino.tempo}/>
          </View>
        </View>
        
        {/* Vídeo */}
        <View style={styles.videoContainer}>
          <TouchableOpacity onPress={() => openLink('https://www.youtube.com/watch?v=NN99hUNwO1A&ab_channel=RenatoCariani')}>
            <Text style={styles.textVideo}> Clique aqui para assistir a vídeo aula </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </Modal>
  );
}
