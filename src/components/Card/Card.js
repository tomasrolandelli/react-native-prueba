import React from "react";
import { View, Text, Image } from 'react-native'
function Card(props){
    return(
        <View style={props.style.card}>
            <Image style={props.style.imageRAM} source={{uri: props.info.image}} resizeMode='contain' />
            <Text style={props.style.name}>{props.info.name}</Text>
        </View>
    )
}
export default Card