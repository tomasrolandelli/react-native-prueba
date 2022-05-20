import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FlatList, TextInput } from 'react-native-web'
import { db, auth } from '../firebase/config'

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    db.collection('users').onSnapshot(
      docs => {
        let users = []
        docs.forEach(doc => {
          users.push({
            id: doc.id,
            data: doc.data()
          })
          this.setState({
            users: users
          })
        })
      }
    )
  }
  render() {
    console.log(this.state.users)
    return (
      <View>
        <TouchableOpacity onPress={() => props.route.params.onLogout()}>
          <Text>Press here to logout</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.data.email}</Text>} />

      </View>
    )
  }
}
