import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Contador from '../components/Contador';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }

    }
    imprimir(){
        console.log('Hola mundo');
    }
  render() {
    return (
        <View style={styles.contenedor}>
            <Text>Hola mundo</Text>
            <TouchableOpacity style={styles.boton} onPress={()=> this.imprimir()}>
            <Text style={styles.texto}>Clickeame</Text>
            </TouchableOpacity>
            <Contador/>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    contenedor:{
        textAlign: 'center',
        padding: 10,
        border: '2px solid #ccc',
        borderRadius: 4,
        backgroundColor: 'white'

    },
    boton: {
        borderRadius: 4,
        border: '2px solid black',
        backgroundColor: '#ccc',
        marginBottom: 10,
        padding: 7
    },
    texto: {
        fontWeight: 'bold'
    }

})
export default Home