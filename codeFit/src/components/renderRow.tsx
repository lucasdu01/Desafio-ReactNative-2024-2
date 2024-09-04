import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/gerenciamentoStyles';

import ModalView from '../modals/modalView';
import ModalEdit from '../modals/modalEdit';
import ModalDelete from '../modals/modalDelete';

export const renderRow = ({
    item,
    visibleModalView, setVisibleModalView,
    visibleModalEdit, setVisibleModalEdit,
    visibleModalDelete, setVisibleModalDelete,
  }) => (

    <View style={styles.row}>
        <Text style={styles.cell}>{item.treino}</Text>
        <Text style={styles.cell}>{item.criadoEm}</Text>
        <View style={styles.actionsCell}>
        <TouchableOpacity onPress={() => setVisibleModalView(true)}>
            <Image source={require("../../assets/images/iconsGerenciamento/iconView.png")} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisibleModalEdit(true)}>
            <Image source={require("../../assets/images/iconsGerenciamento/iconEdit.png")} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisibleModalDelete(true)}>
            <Image source={require("../../assets/images/iconsGerenciamento/iconDelete.png")} style={styles.icon}/>
        </TouchableOpacity>

        <ModalView
            modalVisible={visibleModalView}
            setModalVisible={setVisibleModalView}
        />

        <ModalEdit
            modalVisible={visibleModalEdit}
            setModalVisible={setVisibleModalEdit}
        />

        <ModalDelete
            modalVisible={visibleModalDelete}
            setModalVisible={setVisibleModalDelete}
        />
        </View>
    </View>
);