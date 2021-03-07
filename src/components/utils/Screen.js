import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}> 
            <View style={[styles.view, style]}>
                    {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        marginTop: 12,
    },
    view:{
        flex: 1,
    },
})

export default Screen;