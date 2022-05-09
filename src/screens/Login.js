import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { auth } from '../firebase/config'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            error: ''
        }
    }
    onSubmit(email, pass) {
        auth.signInWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({ loggedIn: true }, () => console.log(this.state.loggedIn))
            })
            .catch((error) => {
                this.setState({ error: 'Credenciales invalidas' })
            })
    }
    render() {
        return (
            <View style={this.props.style.containerForm}>
                <Text style={this.props.style.h1}> Login:  </Text>
                <TextInput
                    style={this.props.style.formulario}
                    keyboardType='email-address'
                    placeholder='email'
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                    style={this.props.style.formulario}
                    keyboardType='default'
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableOpacity style={this.props.style.botonForm} onPress={() => this.onSubmit(this.state.email, this.state.password)}>
                    <Text style={this.props.style.textoBoton}> LOGIN </Text>
                </TouchableOpacity>
                {this.state.error !== '' ?
                    <Text>{this.state.error}</Text>
                    :
                    null}
            </View>
        )
    }
}
