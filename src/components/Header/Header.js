import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }
    render() {
        return (
            <>
            <View>
                <Text>BIENVENIDO</Text>
            </View>
                <View style={this.props.style.Header}>
                    <TouchableOpacity onPress={() => this.props.toggleRegister()} style={this.props.style.botonHeader}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.toggleLogin()} style={this.props.style.botonHeader}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
