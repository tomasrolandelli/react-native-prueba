import React, { Component } from 'react'
import { JumpingTransition } from 'react-native-reanimated'
import { View, Text, TouchableOpacity, TextInput } from 'react-native-web'
import { db, auth } from '../firebase/config'

export default class AgregarPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      texto: '',
      messageState: false
    }
  }
  onSubmitPost(texto) {
    db.collection('posts').add({
      owner: auth.currentUser.email,
      description: texto,
      createdAt: Date.now(),
      likes: [],
      comments: []

    })
      .then((response) => {
        this.setState({
          messageState: true
        }), console.log(Date.now())
      })
      .catch((error) => console.log(error))
  }
  render() {

    const { style } = this.props.route.params
    return (
      <View style={style.containerForm}>
        <Text style={style.h1}>Posteo:</Text>
        <TextInput
          style={style.formulario}
          keyboardType='email-address'
          placeholder='text'
          value={this.state.texto}
          onChangeText={(text) => this.setState({ texto: text })}
        />
        <TouchableOpacity
          style={style.botonForm} onPress={() => {
            this.onSubmitPost(this.state.texto)
            this.setState({
              texto: ''
            })
          }}><Text>Submit</Text></TouchableOpacity>
        {this.state.messageState ?
          <Text>El posteo fue exitoso</Text>
          :
          null}
      </View>
    )
  }
}
