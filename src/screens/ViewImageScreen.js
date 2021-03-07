import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons' 


import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcon name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcon name="trash-can-outline" color="white" size={30} />
            </View>
            <Image 
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon:{
        position: 'absolute',
        top: 40,
        left: 30
    },
    container:{
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon:{
        position: 'absolute',
        top: 40,
        right: 30
    },
    image:{
        position: 'absolute',
        bottom: -30,
        width: "100%",
        height: "100%"
    }
})
