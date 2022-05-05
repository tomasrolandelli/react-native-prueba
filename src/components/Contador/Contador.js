import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


class Contador extends Component {
    constructor(props){
        super(props);
        this.state={
            value: ''
        }
    }

  render() {
    return (
        <View style={styles.contenedor}>
            <Text>Cantidad de clicks: {this.props.valor}</Text>
            <TouchableOpacity style={styles.botonContador} onPress={()=> this.props.funcionAumentar()}>
                <Text style={styles.texto}>Clickeame</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonReset} onLongPress={()=> this.props.funcionReset()}>
                <Text style={styles.texto} >Reset</Text>
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
        padding: 7,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "rgb(0,0,0)",

    },
    texto:{
        fontWeight: 'bold',
        textAlign: 'center'
    },
    botonReset:{
        backgroundColor: 'rgb(255, 0, 0)',
        borderRadius: 4,
        marginBottom: 10,
        padding: 7,
        borderWidth: 1,
        borderColor: "rgb(0,0,0)",
    }
})

export default Contador