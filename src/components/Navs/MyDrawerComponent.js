import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';

function MyDrawerComponent({label, iconName, onPress}) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
            label={label}
            icon={({ focused, color, size }) => <Icon color={color} size={24} name={focused && iconName} />}
            onPress
            />
      </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container:{}
})

export default MyDrawerComponent;