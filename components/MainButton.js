import React from "react";

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import colors from "../constants/colors";

const MainButton = props => {
    console.log('main-btn', props)
    return <TouchableOpacity onPress={props.onPress}>
        <View style={styles.button} >
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        maxWidth: '100%',
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'kaiti',
        textAlign: 'center'
    }
})

export default MainButton
