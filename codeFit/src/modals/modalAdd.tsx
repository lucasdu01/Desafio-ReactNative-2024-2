import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../styles/modalStyles';

type ModalAddProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalAdd({ modalVisible, setModalVisible }: ModalAddProps) {
  const [tipo, setTipo] = useState('');
  const [carga, setCarga] = useState('');
  const [repet, setRepet] = useState('');
  const [tempo, setTempo] = useState('');
  const [video, setVideo] = useState('');

  const criarTreino = () => {
    const novoTreino = {
      type: tipo,
      weight: carga,
      repetitions: repet,
      time: tempo,
      du_user_id: 1,
    };

    fetchCreate(novoTreino);
  };
  
  const fetchCreate = async (novoTreino) => {
    const response = await fetch('https://treinamentoapi.codejr.com.br/api/du/training', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoTreino),
    });  
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
              <TextInput style={styles.input} placeholder="Digite as repetições" value={repet} onChangeText={text => setRepet(text)}/>
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
