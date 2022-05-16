import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import Home from "../screens/Home";
import Chau from "../screens/Chau";
import Account from "../screens/Account";


const Tab = createBottomTabNavigator()

function TabNavigation(props) {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{
                    style: props.route.params.style

                }}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                initialParams={{
                    onLogout: ()=> props.route.params.onLogout()
                }}
                options={{
                    tabBarIcon: () => <AntDesign name="banckward" size={24} color="black" />,
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}
// children={()=> <Hola estilos={StyleSheet.flatten(styles.container)} />}

export default TabNavigation