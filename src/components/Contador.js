import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


class Contador extends Component {
    constructor(props){
        super(props);
        this.state={
            value: 0
        }
    }
    aumentar(){
        this.setState({
            value: this.state.value + 1
        })
    }
  render() {
    return (
        <View style={styles.contenedor}>
            <Text>Cantidad de clicks: {this.state.value}</Text>
            <TouchableOpacity style={styles.botonContador} onPress={()=>this.aumentar()}>
                <Text style={styles.texto}>Clickeame</Text>
            </TouchableOpacity>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    contenedor: {
        marginTop: 5
    },
    botonContador: {
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderRadius: 4,
        border: '2px solid black',
        padding: 7,
        marginBottom: 10,

    },
    texto:{
        fontWeight: 'bold',
        fontSize: 'xxsmall'
    }
})

export default Contador