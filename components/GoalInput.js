import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [inp, setInp] = useState("");

  const handlerInput = (enterText) => {
    setInp(enterText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputOver}>
        <TextInput
          placeholder="默认"
          style={styles.inputStyle}
          onChangeText={handlerInput}
        />
        <Button style={styles.btnStyle1} color="red" title="取消" onPress={() => props.onCancelGoal()} />
        <Button style={styles.btnStyle2} title="添加" onPress={() => props.onAddGoal(inp)} />
        {/* <Button onPress={props.onAddGoal.bind(this, inp)}>添加</Button> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputOver: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1, 
    padding: 10,
    margin: 10,
  },
  btnStyle1: {
    width: '40%',
    padding: 5,
    marginTop: 10,
    backgroundColor: '#E75C5C'
  },
  btnStyle2: {
    width: '40%',
    padding: 5,
    marginTop: 10
  }
});

export default GoalInput;
