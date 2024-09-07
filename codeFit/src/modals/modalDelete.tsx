import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { deleteTreino } from '../services/treinoServices';
import { styles } from '../styles/modalStyles';

type ModalDeleteProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  treino: any;
  onTreinoRemovido: (updatedTreino: any) => void;
};

export default function ModalDelete({ modalVisible, setModalVisible, treino, onTreinoRemovido }: ModalDeleteProps) {
    const handleDelete = async () => {
        const atualTreino = {
            id: treino.id,
            type: treino.tipo,
            weight: treino.carga,
            repetitions: treino.repeticoes,
            time: treino.tempo,
            du_user_id: 1,
        };
        try {
            await deleteTreino(atualTreino);
            await onTreinoRemovido(atualTreino);
            setModalVisible(false);  
          } catch (error) {
            alert('Falha ao excluir treino. Tente novamente.');
            console.error('Erro ao excluir treino:', error.message || error);
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
            <Text style={styles.buttonClose}>X</Text>
            </TouchableOpacity>

                <View style={styles.alertContainer}>
                    <Image source={require("../../assets/images/imgAlerta.png")} style={styles.alertIcon}/>
                    <Text style={styles.modalTitle}>Excluir Treino</Text>
                    <Text style={styles.alertText}> {`Realmente deseja excluir o treino ${treino.tipo}`} </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.yesButton} onPress={handleDelete}>
                        <Text style={styles.yesButtonText}>SIM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.noButtonText}>NÃO</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textStyle}>Ao clicar em "SIM" os seguintes dados serão perdidos:</Text>
                
                {/* Tipo e Carga*/}
                <View style={styles.inputRow}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Tipo:</Text>
                        <TextInput style={styles.input} placeholder={treino.tipo} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Carga:</Text>
                        <TextInput style={styles.input} placeholder={treino.carga} />
                    </View>
                </View>
        
                {/* Repeticoes e Tempo*/}
                <View style={styles.inputRow}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Repetições:</Text>
                        <TextInput style={styles.input} placeholder={treino.repeticoes} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Tempo:</Text>
                        <TextInput style={styles.input} placeholder={treino.tempo} />
                    </View>
                </View>
        </View>
    </View>
    </Modal>
    );
};