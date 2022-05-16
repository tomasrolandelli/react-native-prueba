//ELEMENTOS REACT
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//AUTH
import { auth } from '../firebase/config';

//SCREENS
import TabNavigation from './TabNavigation';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();


export default class StackNavigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            console.log(user);
        })
    }
    onLogin(email, pass) {
        auth.signInWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({ loggedIn: true })
            })
            .catch((error) => {
                this.setState({ error: 'Credenciales invalidas' })
            })
    }
    onRegister(email, pass) {
        auth.createUserWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({ loggedIn: true });
            })
            .catch(error => {
                this.setState({ error: 'Fallo en el registro.' })
                console.error(error)
            })
    }
    onLogout(){
        auth.signOut()
        .then(response=> this.setState({
            loggedIn: false
        }))
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {this.state.loggedIn ?
                        <Stack.Screen
                            name='Tab'
                            component={TabNavigation}
                            options={{ headerShown: false }}
                            initialParams={{
                                style: this.props.style,
                                onLogout: ()=> this.onLogout()
                            }}

                        />
                        :
                        <Stack.Group>
                            <Stack.Screen
                                name='Register'
                                component={Register}
                                initialParams={{
                                    style: this.props.style,
                                    onRegister: (email,pass) => this.onRegister(email,pass)

                                }}

                            />
                            <Stack.Screen
                                name='Login'
                                component={Login}
                                initialParams={{
                                    style: this.props.style,
                                    onLogin: (email,pass) => this.onLogin(email,pass)
                                }}

                            />
                        </Stack.Group>
                    }

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
