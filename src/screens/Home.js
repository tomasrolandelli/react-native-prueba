import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import Contador from '../components/Contador/Contador';
import ImageXD from '../components/Image/Image';
import Card from '../components/Card/Card';
import { ActivityIndicator } from 'react-native-web';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            verFotos: false,
            fotosRAM: [],
            isLoaded: false
        }

    }
    imprimir() {
        console.log('Hola mundo');
    }
    aumentar() {
        this.setState({
            value: this.state.value + 1
        })
    }
    reset() {
        this.setState({
            value: 0
        })
    }
    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((data) =>{
                this.setState({
                    fotosRAM: data.results,
                    verFotos: true,
                    isLoaded: true
                })
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <View style={styles.contenedor}>
                {/* <Text style={styles.textoNotBold}>Hola mundo</Text>
                <TouchableOpacity style={styles.boton} onPress={() => this.imprimir()}>
                    <Text style={styles.texto}>Clickeame</Text>
                </TouchableOpacity>
                <Contador funcionAumentar={() => this.aumentar()} funcionReset={() => this.reset()} valor={this.state.value} />
                <ImageXD /> */}
                {this.state.isLoaded? 
                null
                :
                <ActivityIndicator size='large' color='green'/>
                }
                {this.state.verFotos ?
                    <FlatList
                        data={this.state.fotosRAM}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Card info={item} styles={styles}/>} />
                    :
                    null}

            </View>
        )
    }
}
const styles = StyleSheet.create({
    contenedor: {
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
    textoNotBold: {
        textAlign: 'center'
    },
    imageRAM: {
        height: 400,
        width: 400
    }

})
export default Home