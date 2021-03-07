import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors'

function AppTextInput({icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={styles.icon} />}
            <TextInput style={colors.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        elevation:1,
        marginVertical: 10
    },
    icon:{
        marginRight: 10
    },
})

export default AppTextInput;