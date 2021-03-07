import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors'
import AppText from '../components/AppText'
import Screen from './utils/Screen';

function AppPicker({icon, items, placeholder, numberOfColumns, onSelectItem, selectedItem, PickerItemComponent = Picker, width = "100%" }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, { width}]}>
                {icon && 
                <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={styles.icon} />}
                <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons name="chevron-down" size={25} color={colors.medium}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList 
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item}) => 
                    <PickerItemComponent 
                        item={item}
                        label={item.label}
                        onPress={() => {
                            onSelectItem(item)
                            setModalVisible(false)
                        }}
                    />}
                />
            </Screen>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon:{
        marginRight: 10
    },
    text:{
        flex: 1
    }
})

export default AppPicker;