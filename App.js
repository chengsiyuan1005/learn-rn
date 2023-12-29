import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Card from "./components/Card";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (inp) => {
    console.log("inp", inp);
    if (!inp) return alert("is none");

    setGoalList((goalList) => [
      ...goalList,
      {
        title: inp,
        id: String(new Date().getTime()),
        description: String(new Date().getTime()) + " is description",
      },
    ]);
    setIsAddMode(false);
    // console.log('list--',goalList.length, goalList)
  };

  const removeGoalHandler = (selId) => {
    // console.log('selId', selId)
    setGoalList((goalList) => {
      return goalList.filter((item) => selId !== item.id);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Text>Card 标题</Text>
        <View>
          <Button title="fault"/>
          <Button title="right"/>
        </View>
      </Card>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelGoalHandler}
      />
      {/* 
      <ScrollView>
        {
          list.map(item => <View style={styles.listOne} key={item.key}>
              <Text>{item.title}</Text>
            </View>)
        }
      </ScrollView>
     */}
      {/*列表渲染优化 */}
      {/* 必须有key属性 或 用 keyExtractor属性改变提取唯一属性 */}
      <FlatList
        data={goalList}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.title}
            description={itemData.item.description}
            onDelete={removeGoalHandler}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 50,
  },

  listOne: {
    height: 50,
  },
});
