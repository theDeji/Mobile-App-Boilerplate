import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik'

import Button from '../utils/Buttons/Button'


function SubmitButton({title, navigation}) {

    const { handleSubmit } = useFormikContext();

    return (
        <Button title={title} onPress={() => navigation.navigate('Home')} />
    );
}

const styles = StyleSheet.create({
    container:{}
})

export default SubmitButton;