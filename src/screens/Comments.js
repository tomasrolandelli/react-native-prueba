import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import firebase from 'firebase'

export default class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            nuevoComment: '',
            error: ''
        }
    }
    componentDidMount() {
        const idDoc = this.props.route.params.id
        db.collection('posts').doc(idDoc).onSnapshot(
            (doc) => {
                this.setState({
                    comments: doc.data().comments
                })
            }

        )
    }
    onSubmit(text) {

        const comment = {
            owner: auth.currentUser.email,
            createdAt: Date.now(),
            desc: text
        }
        if (text.length === 0) {
            this.setState({ error: 'el comentario no puede estar vacio' })
            return false
        }
        db.collection('posts').doc(this.props.route.params.id).update({
            comments: firebase.firestore.FieldValue.arrayUnion(comment)
        })
            .then((response) => this.setState({ nuevoComment: '' }))
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.comments}
                    keyExtractor={(item) => item.createdAt.toString()}
                    renderItem={({ item }) => <Text>{item.desc}</Text>}

                />
                <View>
                    <TextInput
                        placeholder='Agrea tu comentario'
                        value={this.state.nuevoComment}
                        keyboardType='default'
                        onChangeText={(text) => this.setState({ nuevoComment: text })}
                    />
                    <TouchableOpacity onPress={() => this.onSubmit(this.state.nuevoComment)}>
                        <Text> ENVIAR </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}