import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { auth } from '../firebase/config'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }
    render() {
        return (
            <View style={this.props.route.params.style.containerForm}>
                <Text style={this.props.route.params.style.h1}> Login:  </Text>
                <TextInput
                    style={this.props.route.params.style.formulario}
                    keyboardType='email-address'
                    placeholder='email'
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                    style={this.props.route.params.style.formulario}
                    keyboardType='default'
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableOpacity style={this.props.route.params.style.botonForm} onPress={() => this.props.route.params.onLogin(this.state.email, this.state.password)}>
                    <Text style={this.props.route.params.style.textoBoton}> LOGIN </Text>
                </TouchableOpacity>
                {this.state.error !== '' ?
                    <Text>{this.state.error}</Text>
                    :
                    null}
            </View>
        )
    }
}
