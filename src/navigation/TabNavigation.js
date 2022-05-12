import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import Home from "../screens/Home";
import Login from "../screens/Login";
import Hola from "../screens/Hola";
import Chau from "../screens/Chau";

const Tab = createBottomTabNavigator()

function TabNavigation(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen
                    style={props.style}
                    name='Hola'
                    component={Hola}
                    options={{ tabBarIcon: () => <AntDesign name="banckward" size={24} color="black" /> }}
                />
                <Tab.Screen
                    style={props.style}
                    name='Chau'
                    component={Chau}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
// children={()=> <Hola estilos={StyleSheet.flatten(styles.container)} />}

export default TabNavigation