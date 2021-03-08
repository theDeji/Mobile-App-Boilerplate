import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Switch, ColorPropType } from 'react-native';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'


import colors from '../config/colors'
import { color } from 'react-native-reanimated';

function DrawerContent(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{flex:1}}>
            <View style={styles.userInfoSection}>
                <Image source={require('../assets/mosh.jpg')} style={styles.image} />
                <Text style={styles.title}>Daniel Seis</Text>
                <Text style={styles.subtitle}>Software Engineer</Text>
            </View>
            <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
                    <View style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size, focused}) => 
                            <Feather
                                name="user"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'}
                            />}
                            label="Profile"
                            labelStyle={{
                                color:'#ccc'
                            }}
                            onPress={() => props.navigation.navigate('Profile')}
                        />
                        <DrawerItem 
                            icon={({color, size, focused}) => 
                            <AntDesign
                                name="dashboard"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'}
                                />}
                            label="Dashboard"
                            labelStyle={{
                                color:'#ccc'
                            }}
                            onPress={() => props.navigation.navigate('Home')}
                        />
                        <DrawerItem
                            icon={({color, size, focused}) => 
                            <AntDesign
                                name="bulb1"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'}
                            />}
                            label="Pitch"
                            labelStyle={{
                                color:'#ccc'
                            }}
                            onPress={() => props.navigation.navigate('Pitch')}
                        />
                        <DrawerItem
                            icon={({color, size, focused}) => 
                            <Ionicons 
                                name="trending-up"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'}
                            />}
                            label="Trends"
                            labelStyle={{
                                color:'#ccc'
                            }}
                            onPress={() => props.navigation.navigate('Trends')}
                        />
                        <DrawerItem
                            icon={({color, size, focused}) => 
                            <Feather
                                name="settings"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'}
                            />}
                            label="Settings"
                            labelStyle={{
                                color:'#ccc'
                            }}
                            onPress={() => props.navigation.navigate('Settings')}
                        />
                        <DrawerItem 
                            icon={({color, size, focused}) => 
                            <AntDesign
                                name="customerservice"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'}
                                />}
                            label="Support"
                            labelStyle={{
                                color:'#ccc'
                            }}
                            onPress={() => props.navigation.navigate('Support')}
                        />
                    </View>
                    <View style={styles.preference}>
                        <Text style={styles.prefMode}>Dark Mode</Text>
                        <Switch  
                            trackColor={{ false: "#ccc", true: "#ccc" }}
                            thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
            </DrawerContentScrollView>
            <View style={styles.signout}>
                <DrawerItem 
                    icon={({color, size, focused}) => 
                    <MaterialIcons
                    name="logout"
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                    />}
                  label="Sign Out"
                  labelStyle={{
                      color:'#ccc'
                  }}
                  onPress={() => console.log('logged out')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{},
    image:{
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:20
    },
    userInfoSection:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    subtitle:{
        fontSize:14,
        color:'#ccc',
        marginBottom:15
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.light
    },
    signout:{
        marginBottom:20,
    },  
    drawerSection:{
       flex:1,
       marginBottom:10,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:5,
        paddingHorizontal:15
    },
    prefMode:{
        color:"#ccc",
        marginTop:5
    }

})

export default DrawerContent;