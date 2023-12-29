import React from "react"
import { View, StyleSheet } from "react-native"


const Card = (props) => {
    return (
        <View style={{...styles.card}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowOffset: {width: 0, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.26,
        elevation: 8,
        borderRadius: 10
    }
})

export default Card