import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { styles } from '../styles/modalStyles';

type ModalDeleteProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalDelete({ modalVisible, setModalVisible }: ModalDeleteProps) {
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
            <Text style={styles.buttonClose}>X</Text>
            </TouchableOpacity>

                <View style={styles.alertContainer}>
                    <Image source={require("../../assets/images/imgAlerta.png")} style={styles.alertIcon}/>
                    <Text style={styles.modalTitle}>Excluir Treino</Text>
                    <Text style={styles.alertText}> Realmente deseja excluir o treino de ? </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.yesButton} onPress={() => { /* lógica para excluir o treino */ }}>
                        <Text style={styles.yesButtonText}>SIM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.noButtonText}>NÃO</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textStyle}>Ao clicar em "SIM" os seguintes dados serão perdidos:</Text>
                
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
        </View>
    </View>
    </Modal>
    );
};