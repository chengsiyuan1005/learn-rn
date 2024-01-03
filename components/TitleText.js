import {React} from 'react'
import {Text, StyleSheet} from 'react-native'

const TitleText = props => <Text style={styles.body}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontFamily: 'kaiti',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default TitleText
