import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/modalStyles';
import { createTreino } from '../services/treinoServices';


type ModalAddProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onTreinoAdicionado: (novoTreino: any) => void;
};

export default function ModalAdd({ modalVisible, setModalVisible, onTreinoAdicionado }: ModalAddProps) {
  const [tipo, setTipo] = useState('');
  const [carga, setCarga] = useState('');
  const [repeticoes, setRepeticoes] = useState('');
  const [tempo, setTempo] = useState('');
  const [video, setVideo] = useState('');

  const criarTreino = async () => {
    const novoTreino = {
      type: tipo,
      weight: carga,
      repetitions: repeticoes,
      time: tempo,
      du_user_id: 1,
    };
    try {
      await createTreino(novoTreino);
      await onTreinoAdicionado(novoTreino);
      setTipo('');
      setCarga('');
      setRepeticoes('');
      setTempo('');
      setVideo('');
      setModalVisible(false);  
    } catch (error) {
      alert('Falha ao criar treino. Tente novamente.');
      console.error('Erro ao criar treino:', error.message || error);
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
          <Text style={styles.modalTitle}>Novo treino</Text>
          
          {/* Tipo e Carga */}
          <View style={styles.inputRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Tipo:</Text>
              <TextInput style={styles.input} placeholder="Digite o tipo" value={tipo} onChangeText={text => setTipo(text)}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Carga:</Text>
              <TextInput style={styles.input} placeholder="Digite a carga" value={carga} onChangeText={text => setCarga(text)}/>
            </View>
          </View>
          
          {/* Repetições e Tempo */}
          <View style={styles.inputRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Repetições:</Text>
              <TextInput style={styles.input} placeholder="Digite as repetições" value={repeticoes} onChangeText={text => setRepeticoes(text)}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Tempo:</Text>
              <TextInput style={styles.input} placeholder="Digite o tempo" value={tempo} onChangeText={text => setTempo(text)}/>
            </View>
          </View>
          
          {/* Video */}
          <View style={styles.videoContainer}>
            <Text style={styles.label}>Vídeo:</Text>
            <TextInput style={styles.input} placeholder="Url do video" value={video} onChangeText={text => setVideo(text)}/>
          </View>

          {/* Botão */}
          <View>
            <TouchableOpacity style={styles.confirmaButton} onPress={criarTreino}>
                <Text style={styles.confirmaButtonText}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}
