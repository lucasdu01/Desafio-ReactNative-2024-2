import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../styles/modalStyles';

type ModalViewProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  treino: any;
};


export default function ModalView({ modalVisible, setModalVisible, treino }: ModalViewProps) {
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
            <TextInput style={styles.input} placeholder={treino.tipo}/>
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
          <Text style={styles.label}>Vídeo:</Text>

        </View>
      </View>
    </View>
    </Modal>
  );
}
