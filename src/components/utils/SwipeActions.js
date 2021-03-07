import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import colors from '../../config/colors'

function SwipeActions(props) {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
            <View style={styles.actionOne}>

            </View>
            <View style={styles.actionTwo}>

            </View>
            <View style={styles.actionThree}>

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    actionOne:{
        backgroundColor: colors.primary,
        borderRadius:10,
        elevation:5,
        height:90,
        marginLeft:5,
        marginRight:10,
        overflow:'hidden',
        width: 300,
    },
    actionTwo:{
        backgroundColor: colors.other,
        borderRadius:10,
        elevation:5,
        height:90,
        marginRight:10,
        overflow:'hidden',
        width: 300,
    },
    actionThree:{
        backgroundColor: colors.medium,
        borderRadius:10,
        elevation:5,
        height:90,
        marginRight:10,
        marginBottom:10,
        overflow:'hidden',
        width: 300,
    },
    container:{
        flex:1,
        flexDirection:'row',
        marginBottom:75
    }
})

export default SwipeActions;