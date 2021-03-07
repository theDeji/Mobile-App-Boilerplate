import React from 'react';
import { View, StyleSheet } from 'react-native';

function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            {/* a circular imgage, below it is the name and below the name is an occupation or subtitle.
            then below that view,  four boxes that stretch out
            and below that, a log out button
            */}
            <View style={styles.profileBio}>

            </View>
            <View styles={styles.profileOptions}>

            </View>
            <View style={styles.logout}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{}
})

export default ProfileScreen;