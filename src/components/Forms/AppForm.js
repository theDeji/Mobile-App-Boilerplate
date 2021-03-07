import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik'

function AppForm({initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik
            initialValues={{email: '', password:''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            {() => (<>{children}</>)}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container:{}
})

export default AppForm;