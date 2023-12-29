import React from "react";
import {View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.flatListOne}>
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    flatListOne: {
        width: '100%',
        backgroundColor: '#aaa',
        color: '#FFF',
        height: 40,
        margin: 20,
      }
})

export default GoalItem;
