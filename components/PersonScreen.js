import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  Animated,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Axios from "axios";
import { Image } from "expo-image";
import { Card } from "react-native-elements";
import {ScrollView} from 'react-native-gesture-handler'

const { width, height } = Dimensions.get("screen");

const api = {
  base: "https://rickandmortyapi.com/api/",
};

const widthMax = width * 0.88;
const heightMax = widthMax * 1.1;

const PersonScreen = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const scrollY = React.useRef(new Animated.Value(100)).current;
  const searchPressed = async (name) => {
    const result = await Axios.get(`${api.base}/character/?name=${search}`);
    // console.log(result.data.results);
    setData(result.data.results);
  };

  const handleTextChange = (names) => {
    setSearch(names);
  };

  return (
    <View id="App">
      <View id="App-header">
        <View id="container">
          <Text style={styles.title}>Rick and Morty</Text>
          <View>
            <TextInput
              placeholder="First Name..."
              id="txt_name"
              onChangeText={handleTextChange}
              style={styles.txtName}
            />

            <View id="btn">
              <Button
                id="btn_search"
                title="Buscar"
                onPress={searchPressed}
                style={styles.button}
              ></Button>
            </View>
          </View>


          <FlatList data={data} 
          renderItem={({item}) => {
            return (
              <Card style={styles.card}>
                 <Text>{item.name}</Text>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 200, height: 200 }}
                  /> 
               </Card> 
            )
          }}>

          </FlatList>


        </View>
      </View>
    </View>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#0f2027",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 15,
    flex: 1,
    shadowColor: "000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    height: heightMax,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  txtName: {
    fontSize: 22
  },
  title: {
    fontSize: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: 'green'
  }
});
