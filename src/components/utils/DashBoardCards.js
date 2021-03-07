import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors'

// <DashboardCard />

function DashBoardCards({colNo, top, bottom,  }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.one}>
                </View>
                <View style={styles.two}>
                </View>
            </View>
            <View style={styles.mid}>
                <View style={styles.three}>
                </View>
                <View style={styles.four}>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mid:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    container:{
        flexDirection:'column',
        height:372,
        marginRight:7,
        marginLeft:7,
        marginBottom:15
    },
    one:{
        backgroundColor: colors.other,
        width: 195,
        height:219,
        borderRadius:30,
        overflow:'hidden',
        elevation:5,
    },
    top:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    two:{
        backgroundColor: colors.primary,
        width: 195,
        height:146,
        borderRadius:30,
        overflow:'hidden',
        elevation:5,
    },
    three:{
        backgroundColor: colors.secondary,
        borderRadius:30,
        elevation:5,
        height:146,
        overflow:'hidden',
        position:'absolute',
        bottom:0,
        width: 195,
    },
    four:{
        backgroundColor: colors.pink,
        borderRadius:30,
        elevation:5,
        height:219,
        overflow:'hidden',
        position:'absolute',
        bottom:0,
        right:0,
        width: 195,
    },
})

export default DashBoardCards;