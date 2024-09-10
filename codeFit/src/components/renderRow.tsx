import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/gerenciamentoStyles';

import ModalView from '../modals/modalView';
import ModalEdit from '../modals/modalEdit';
import ModalDelete from '../modals/modalDelete';

export const renderRow = ({
    item, carregarTreinos,
    visibleModalView, setVisibleModalView,
    visibleModalEdit, setVisibleModalEdit,
    visibleModalDelete, setVisibleModalDelete,
    setTreinoSelecionado
  }) => (

    <View style={styles.row}>
        <Text style={styles.cell}>{item.tipo}</Text>
        <Text style={styles.cell}>{item.criadoEm}</Text>
        <View style={styles.actionsCell}>
        <TouchableOpacity onPress={() => {setVisibleModalView(true); setTreinoSelecionado(item);}}>
            <Image source={require("../../assets/images/iconsGerenciamento/iconView.png")} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setVisibleModalEdit(true); setTreinoSelecionado(item);}}>
            <Image source={require("../../assets/images/iconsGerenciamento/iconEdit.png")} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setVisibleModalDelete(true); setTreinoSelecionado(item);}}>
            <Image source={require("../../assets/images/iconsGerenciamento/iconDelete.png")} style={styles.icon}/>
        </TouchableOpacity>

        <ModalView
            modalVisible={visibleModalView}
            setModalVisible={setVisibleModalView}
            treino={item}
        />

        <ModalEdit
            modalVisible={visibleModalEdit}
            setModalVisible={setVisibleModalEdit}
            treino={item}
            onTreinoEditado={carregarTreinos}
        />

        <ModalDelete
            modalVisible={visibleModalDelete}
            setModalVisible={setVisibleModalDelete}
            treino={item}
            onTreinoRemovido={carregarTreinos}
        />
        </View>
    </View>
);