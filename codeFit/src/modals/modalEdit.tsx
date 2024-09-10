import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { updateTreino } from '../services/treinoServices';
import { styles } from '../styles/modalStyles';

type ModalEditProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  treino: any;
  onTreinoEditado:(updatedTreino: any) => void;
};

export default function ModalEdit({ modalVisible, setModalVisible, treino, onTreinoEditado }: ModalEditProps) {
  const [tipo, setTipo] = useState('');
  const [carga, setCarga] = useState('');
  const [repeticoes, setRepeticoes] = useState('');
  const [tempo, setTempo] = useState('');
  const [video, setVideo] = useState('');

  useEffect(() => {
    if (treino) {
      setTipo(treino.tipo || '');
      setCarga(treino.carga || '');
      setRepeticoes(treino.repeticoes || '');
      setTempo(treino.tempo || '');
      setVideo(video || '');
    }
  }, [treino]);

  const editarTreino = async () => {
    const atualTreino = {
      id: treino.id,
      type: tipo,
      weight: carga,
      repetitions: repeticoes,
      time: tempo,
      du_user_id: 1,
    };
    try {
      await updateTreino(atualTreino);
      await onTreinoEditado(atualTreino);
      setModalVisible(false);  
    } catch (error) {
      alert('Falha ao editar treino. Tente novamente.');
      console.error('Erro ao editar treino:', error.message || error);
    }
  };
  
  return (
    <Modal
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
        <Text style={styles.modalTitle}>Editar Treino</Text>

        {/* Tipo e Carga*/}
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tipo:</Text>
            <TextInput style={styles.input} value={tipo} onChangeText={text => setTipo(text)}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Carga:</Text>
            <TextInput style={styles.input} value={carga} onChangeText={text => setCarga(text)}/>
          </View>
        </View>
            
        {/* Repeticoes e Tempo*/}
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Repetições:</Text>
            <TextInput style={styles.input} value={repeticoes} onChangeText={text => setRepeticoes(text)}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tempo:</Text>
            <TextInput style={styles.input} value={tempo} onChangeText={text => setTempo(text)}/>
          </View>
        </View>
            
          {/* Video */}
          <View style={styles.videoContainer}>
            <Text style={styles.label}>Vídeo:</Text>
            <TextInput style={styles.input} placeholder="Url do video"/>
          </View>

        {/* Botão Confirmar*/}
        <View>
          <TouchableOpacity style={styles.confirmaButton} onPress={editarTreino}>
              <Text style={styles.confirmaButtonText}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
    </Modal>
  );
}
