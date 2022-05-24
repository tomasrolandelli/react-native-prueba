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
            .then((data) => {
                this.setState({
                    fotosRAM: data.results,
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
                {this.state.isLoaded ?
                    <FlatList
                        data={this.state.fotosRAM}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Card info={item} style={styles} />} />
                    :
                    <ActivityIndicator size='large' color='green' />
                }

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
        borderColor: '#00FFFF',
        flex: 1

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
        height: 100,
        width: 100
    },
    card:{
        justifyContent: 'flex-start',
        backgroundColor: '#00FFFF',
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        padding: 5,
        borderWidth: 2,

    },
    name:{
        fontSize: 'large',
        padding: 5,
        alignSelf: 'center',

    }

})
export default Home