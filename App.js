import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Card from "./components/Card";
import TitleText from "./components/TitleText";
import BodyText from "./components/BodyText";
import defaultStyles from "./constants/default-styles";
import MainButton from "./components/MainButton";

const fetchFonts = () => {
  return Font.loadAsync({
    youyuan: require("./assets/fonts/youyuan.ttf"),
    xiaozhuan: require("./assets/fonts/xiaozhuan.ttf"),
    xingkai: require("./assets/fonts/xingkai.ttf"),
    kaiti: require("./assets/fonts/kaiti.ttf"),
  });
};

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width)
  console.log('屏幕宽度init ', screenWidth)


  // 监听屏幕变化
  // const updateLayout = () => {
  //   console.log('listen screen change ', Dimensions.get('window').width)
  //   setScreenWidth(Dimensions.get('window').width)
  // }
  // Dimensions.addEventListener('change', updateLayout)

  useEffect(() => {
    const updateLayout = () => {
      console.log('listen screen change ', Dimensions.get('window').width)
      setScreenWidth(Dimensions.get('window').width)
    }
    Dimensions.addEventListener('change', updateLayout)
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
      console.log('-----------------')
    }
  })
  
  

  if (!isLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoading(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

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

  const handlerMainBtn = () => {
    console.log("屏幕像素 ", Dimensions.get("window"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TitleText>这是标题</TitleText>
        <Text style={defaultStyles.secondTitle}>二级标题</Text>
      </View>
      <View style={styles.img}>
        <Image
          style={styles.imgInner}
          source={require("./assets/react-logo.jpeg")}
          resizeMode="cover"
        />
        <Image
          style={styles.imgInner}
          fadeDuration={1000}
          source={{
            uri: "https://img0.baidu.com/it/u=2921026407,385489869&fm=253&fmt=auto&app=138&f=JPEG?w=897&h=500",
          }}
        />
      </View>
      {/**width写成内联样式, 防止浅拷贝遇到数据不更新 */}
      <View style={{ ...styles.gap,width: screenWidth * 0.72}}>
          <Text>Gap</Text>
          <Text>{Dimensions.get('window').width}</Text>
      </View>
      <Card style={styles.card}>
        <BodyText>Card 标题</BodyText>
        <View style={styles.cardBtn}>
          <Button title="对的" style={styles.rightBtn} />

          <Button title="错的" style={styles.errBtn} />
          <Text style={styles.rightBtn}>随便写点什么</Text>
        </View>
      </Card>
      <View style={styles.mainBtn}>
        <MainButton onPress={handlerMainBtn} >主按钮</MainButton>
      </View>
      <View style={styles.iconsView} >
        <AntDesign name="linechart" size={24} color="black" />
        <AntDesign name="github" size={24} color="black" />
        <MaterialCommunityIcons name="iron-board" size={24} color="black" />
      </View>
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
      <TextInput placeholder="app input default" />

      <KeyboardAvoidingView behavior="position">
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
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 50,
  },
  header: {
    width: "100%",
    flex: "row",
    justifyContent: "center",
  },
  img: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imgInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  gap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.72,
    height: 50,
    backgroundColor: '#eee'
  },

  listOne: {
    height: 50,
  },

  card: {
    flexDirection: "row",
    width: 300,
    borderWidth: 2,
    borderColor: "#666",
    // borderColor: '#fff',
    maxWidth: "100%",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 10,
    justifyContent: "space-around",
  },

  cardTitle: {
    fontFamily: "kaiti",
  },

  iconsView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  mainBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cardBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rightBtn: {
    fontFamily: "kaiti",
    color: "#E75C5C",
  },
  errBtn: {
    fontFamily: "kaiti",
  },
});
