import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

export default function Post(props) {
    const {style,info} = props
    return (
        <View style={style.post}>
            <Text>{info.data.description}</Text>
            <View style={style.divLikes}>
                <Text>Likes: </Text>
                <TouchableOpacity style={style.like}><Text>+</Text></TouchableOpacity>
                <TouchableOpacity style={style.like}><Text>-</Text></TouchableOpacity>
            </View>
        </View>
    )
}