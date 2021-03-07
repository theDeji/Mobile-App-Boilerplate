import React from 'react';
import { Text } from 'react-native';

import Button from './utils/Buttons/Button'
import Screen from './utils/Screen'

function Home({props, navigation, route}) {
    return (
        <Screen>
            <Button title="Go to Home" onPress={() =>
                navigation.navigate('Welcome', { name: 'Jane' })
            }
            />
            <Text>This is {route.params.name}'s profile</Text>;
        </Screen>
    );
}
export default Home;