import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'

export default function Account(props) {
  return (
      <View>
        <TouchableOpacity onPress={()=> props.route.params.onLogout()}>
          <Text>Press here to logout</Text>
        </TouchableOpacity>
      </View>
  )
}
