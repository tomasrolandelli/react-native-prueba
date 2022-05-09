import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { auth } from '../firebase/config';


export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            registered: false,
            error: ''
        }
    }
    onSubmit(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                this.setState({ registered: true },()=> console.log(this.state.registered));
            })
            .catch(error => {
                this.setState({ error: 'Fallo en el registro.' })
                console.error(error)
            })
    }
    render() {
        return (
            <>
                <View style={this.props.style.containerForm}>
                    <Text style={this.props.style.h1}> REGISTER (its free) </Text>
                    <TextInput
                        style={this.props.style.formulario}
                        keyboardType='email-address'
                        placeholder='email'
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput
                        style={this.props.style.formulario}
                        keyboardType='default'
                        placeholder='username'
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <Text>Password must be at least 6 characters long</Text>
                    <TextInput
                        style={this.props.style.formulario}
                        keyboardType='default'
                        placeholder='password'
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <TouchableOpacity style={this.props.style.botonForm} onPress={() => this.onSubmit(this.state.email, this.state.password)}>
                        <Text style={this.props.style.textoBoton}> Register </Text>
                    </TouchableOpacity>
                </View>
                {/* {this.state.email !== '' ?
                    <View style={this.props.style.containerForm}>
                        <Text style={this.props.style.textoResult}>Tu email: {this.state.email}</Text>
                        <Text style={this.props.style.textoResult}>Tu username: {this.state.username}</Text>
                        <Text style={this.props.style.textoResult}>Tu Contraseña: {this.state.password}</Text>
                    </View>
                    :
                    null} */}

            </>
        )
    }
}
