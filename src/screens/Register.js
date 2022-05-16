import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { auth } from '../firebase/config';


export default class Register extends Component {
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
            <>
                <View style={this.props.route.params.style.containerForm}>
                    <Text style={this.props.route.params.style.h1}> REGISTER (its free) </Text>
                    <TextInput
                        style={this.props.route.params.style.formulario}
                        keyboardType='email-address'
                        placeholder='email'
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <Text>Password must be at least 6 characters long</Text>
                    <TextInput
                        style={this.props.route.params.style.formulario}
                        keyboardType='default'
                        placeholder='password'
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <TouchableOpacity style={this.props.route.params.style.botonForm} onPress={() => this.props.route.params.onRegister(this.state.email, this.state.password)}>
                        <Text style={this.props.route.params.style.textoBoton}> Register </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={this.props.route.params.style.botonRedirect} onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text>Tienes Cuenta? click aqui para login</Text>
                </TouchableOpacity>
                {/* {this.state.email !== '' ?
                    <View style={this.props.route.params.style.containerForm}>
                        <Text style={this.props.route.params.style.textoResult}>Tu email: {this.state.email}</Text>
                        <Text style={this.props.route.params.style.textoResult}>Tu username: {this.state.username}</Text>
                        <Text style={this.props.route.params.style.textoResult}>Tu Contraseña: {this.state.password}</Text>
                    </View>
                    :
                    null} */}

            </>
        )
    }
}
