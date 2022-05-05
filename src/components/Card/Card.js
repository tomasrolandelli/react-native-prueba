import React from "react";
import { View, Text, Image } from 'react-native'
function Card(props){
    return(
        <View>
            <Image style={props.styles.imageRAM} source={require('../../../assets/pandora.jpeg')} resizeMode='contain' />
            <Text>{props.info.origin.name}</Text>
        </View>
    )
}
export default Card