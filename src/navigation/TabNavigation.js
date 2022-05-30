import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 




import Home from "../screens/Home";
import Chau from "../screens/Chau";
import Account from "../screens/Account";
import AgregarPosts from "../screens/AgregarPosts";


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
                options={{ 
                    headerShown: false,
                    tabBarIcon:()=><FontAwesome5 name="home" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                initialParams={{
                    onLogout: ()=> props.route.params.onLogout(),
                    style: props.route.params.style,
                    navigation: props.navigation
                }}
                options={{
                    tabBarIcon: () => <MaterialIcons name="account-circle" size={24} color="black" />,
                    headerShown: false
                }}
            />
            <Tab.Screen
             name="AgregarPost"
             component={AgregarPosts}
             initialParams={{
                 style: props.route.params.style,
                 email: props.route.params.email
             }}
             options={{
                 tabBarIcon:()=> <MaterialIcons name="post-add" size={24} color="black" />
             }}
            />
        </Tab.Navigator>
    )
}
// children={()=> <Hola estilos={StyleSheet.flatten(styles.container)} />}

export default TabNavigation