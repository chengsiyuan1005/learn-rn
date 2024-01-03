import React from "react"
import { View, StyleSheet } from "react-native"


const Card = (props) => {
    // 样式外部引入
    return (
        <View style={{...props.style, ...styles.card}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // flexDirection: 'row',
        // width: 300,
        // borderWidth: 2,
        borderColor: 'blue',
        // maxWidth: '100%',
        // alignItems: 'center',
        // shadowOffset: {width: 0, height: 2},
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // elevation: 8,
        // borderRadius: 10,
        // justifyContent: 'space-around',
    }
})

export default Card