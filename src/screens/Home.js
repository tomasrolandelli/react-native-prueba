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
    aumentar(){
        this.setState({
            value: this.state.value + 1
        })
    }
    reset(){
        this.setState({
            value: 0
        })
    }

  render() {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.textoNotBold}>Hola mundo</Text>
            <TouchableOpacity style={styles.boton} onPress={()=> this.imprimir()}>
            <Text style={styles.texto}>Clickeame</Text>
            </TouchableOpacity>
            <Contador funcionAumentar={()=>this.aumentar()} funcionReset={()=>this.reset()} valor={this.state.value}/>

        </View>
    )
  }
}
const styles = StyleSheet.create({
    contenedor:{
        textAlign: 'center',
        padding: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: '#00FFFF'

    },
    boton: {
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginBottom: 10,
        padding: 7,
        borderWidth: 1,
        borderColor: "rgb(0,0,0)",
    },
    texto: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textoNotBold:{
        textAlign: 'center'
    }

})
export default Home