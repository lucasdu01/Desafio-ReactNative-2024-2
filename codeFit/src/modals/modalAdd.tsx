import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';


import { styles } from '../styles/modalStyles';

type ModalAddProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalAdd({ modalVisible, setModalVisible }: ModalAddProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalLayout}>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Novo treino</Text>
          
          {/* View para alinhar Tipo e Carga lado a lado */}
          <View style={styles.inputRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Tipo:</Text>
              <TextInput style={styles.input} placeholder="Digite o tipo" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Carga:</Text>
              <TextInput style={styles.input} placeholder="Digite a carga" />
            </View>
          </View>
          
          {/* View para alinhar Repetições e Tempo lado a lado */}
          <View style={styles.inputRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Repetições:</Text>
              <TextInput style={styles.input} placeholder="Digite as repetições" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Tempo:</Text>
              <TextInput style={styles.input} placeholder="Digite o tempo" />
            </View>
          </View>
          
          {/* Espaço para o vídeo */}
          <View style={styles.videoContainer}>
            <Text style={styles.label}>Vídeo:</Text>

          </View>
        </View>
      </View>
    </Modal>
  );
}
