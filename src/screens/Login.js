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
        const {style} = this.props.route.params
        return (
            <View style={style.containerForm}>
                <Text style={style.h1}> Login:  </Text>
                <TextInput
                    style={style.formulario}
                    keyboardType='email-address'
                    placeholder='email'
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                    style={style.formulario}
                    keyboardType='default'
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableOpacity style={style.botonForm} onPress={() => this.props.route.params.onLogin(this.state.email, this.state.password)}>
                    <Text style={style.textoBoton}> LOGIN </Text>
                </TouchableOpacity>
                {this.state.error !== '' ?
                    <Text>{this.state.error}</Text>
                    :
                    null}
            </View>
        )
    }
}
