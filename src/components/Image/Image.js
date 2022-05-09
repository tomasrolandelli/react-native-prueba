import React from "react";
import {View, Image, StyleSheet} from 'react-native'

function ImageXD(props) {
    return(
        <View>
            {/* <Image style={styles.image} source={require('assets/pandora.jpeg')} resizeMode={'cover'}/> */}
            <Image style={styles.image} source={{uri:'https://lapaginamillonaria.com/__export/1633441863048/sites/lpm/img/2021/10/05/xlvarez_-_rojo_crop1633441784392.jpg_1693159006.jpg'}} resizeMode='contain'/>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        height: 50
    }
})
export default ImageXD