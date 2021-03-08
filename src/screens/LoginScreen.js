import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import * as Yup from 'yup';
import Constants from 'expo-constants'

import { AppForm, AppFormField, SubmitButton } from '../components/Forms'
import Screen from '../components/utils/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});


function LoginScreen({navigation}) {

    return (
            <ImageBackground
                blurRadius={3}
                style={styles.background}
                source={require("../assets/background.jpg")}
            >
                
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <AppForm
                    initialValues={{email: '', password:''}}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField 
                        autoCorrect={false}
                        autoCapitalize="none"
                        icon="email"
                        name="email"
                        keyboardType="email-address"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField 
                        autoCorrect={false}
                        autoCapitalize="none"
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />                        
                    <SubmitButton title="Login" navigation={navigation} />
                </AppForm>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;