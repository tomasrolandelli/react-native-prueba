//ELEMENTOS REACT
import React, { Component } from 'react'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//AUTH
import { auth, db } from '../firebase/config';

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

    // componentDidMount() {
    //     auth.onAuthStateChanged(user => {
    //         console.log(user);
    //     })
    // }
    onLogin(email, pass) {
        auth.signInWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({ loggedIn: true })
            })
            .catch((error) => {
                this.setState({ error: 'Credenciales invalidas' })
            })
    }
    onRegister(email, pass, user) {

        auth.createUserWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({ loggedIn: true })
                db.collection('users').add({
                    email: email,
                    password: pass,
                    username: user,
                    createdAt: Date.now()
                })
                    .then((response) => console.log(response))
                    .catch((err) => console.log(err))
            })
            .catch(error => {
                this.setState({ error: 'Fallo en el registro.' })
                console.error(error)
            })
    }
    onLogout() {
        auth.signOut()
            .then(response => this.setState({
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
                                onLogout: () => this.onLogout()
                            }}

                        />
                        :
                        <Stack.Group>
                            <Stack.Screen
                                name='Register'
                                component={Register}
                                initialParams={{
                                    style: this.props.style,
                                    onRegister: (email, pass, user) => this.onRegister(email, pass, user)

                                }}

                            />
                            <Stack.Screen
                                name='Login'
                                component={Login}
                                initialParams={{
                                    style: this.props.style,
                                    onLogin: (email, pass) => this.onLogin(email, pass)
                                }}

                            />
                        </Stack.Group>
                    }

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
