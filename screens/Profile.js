import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  navigation,
  Image,
  LogBox,
  Dimensions
} from 'react-native';

LogBox.ignoreAllLogs();

import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';


import Information from "./Infomation";
//const Profile: () => React$Node = ({ route }) => 
export default class Profile extends React.Component {

  state = {
    data: [],
    datas: [],
    datass: []
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3001/Personal'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });

    const responses = await fetch('http://localhost:3002/BMI'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTables = await responses.json();
    this.setState({ datas: testTables });

    const responsess = await fetch('http://localhost:3003/statusHealth'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTabless = await responsess.json();
    this.setState({ datass: testTabless });

  }
  componentDidMount = () => {
    this.fetchData();
  }


  render() {
    return (
      <View style={{ flex: 1}}>
        <Image style={{borderBottomLeftRadius : 15 ,borderBottomRightRadius : 15,height: 300, width: Dimensions.get('window').width }} source={require('../img/6.jpg')} />
        <View style={{ position: 'absolute' , marginLeft : 30 }}>
          <View style={{ marginTop: 50, alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff", fontWeight: "600" }}>
              Profile
            </Text>
          </View>

          <View style={{ marginTop: 10, alignItems: "center" }}>
            <Image style={{ width: 100, height: 100, borderRadius: 15 }} source={require('../img/1.png')} />
          </View>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Sathit Srisawat
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: "#fff", fontSize: 10 }}>
              WU | Compter Engineering
            </Text>
          </View>

          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>

              <View style={{ alignItems: "center", marginRight: 15, marginLeft: 15 }}>

                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ color: "#000" }}>
                        {item.Age}
                      </Text>
                    </View>
                  }
                />

                <View style={{ marginTop: 10 }}>
                  <Text>
                    AGE
                  </Text>
                </View>
              </View>

              <Text style={{ fontSize: 30, alignSelf: "center" }}>|</Text>
              <View style={{ alignItems: "center", marginLeft: 15, marginRight: 15 }}>

                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ color: "#000" }}>
                        {item.Weight}
                      </Text>
                    </View>
                  }
                />

                <View style={{ marginTop: 10 }}>
                  <Text>
                    Weight
                  </Text>
                </View>

              </View>

              <Text style={{ fontSize: 30, alignSelf: "center" }}>|</Text>
              <View style={{ alignItems: "center", marginLeft: 15, marginRight: 15 }}>

                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ color: "#000" }}>
                        {item.Height}
                      </Text>
                    </View>
                  }
                />

                <View style={{ marginTop: 10 }}>
                  <Text>
                    Height
                  </Text>
                </View>
              </View>

              <Text style={{ fontSize: 30, alignSelf: "center" }}>|</Text>

              <View style={{ alignItems: "center", marginLeft: 15, marginRight: 15 }}>

                <FlatList
                  data={this.state.datas}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ color: "#000" }}>
                        {item.BMI}
                      </Text>
                    </View>
                  }
                />

                <View style={{ marginTop: 10 }}>
                  <Text>
                    BMI
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.status}>
              <View style={{ flexDirection: "row", marginTop: 30 }}>
                <View >
                  <Text>
                    {"\t\t"} Health {'\t\t'}:
                  </Text>
                </View>
                <View>
                  <FlatList
                    data={this.state.datass}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                      <View>
                        <Text style={{ color: "#000" }}>
                          {"\t"}{item.status}
                        </Text>
                      </View>
                    }
                  />
                </View>
              </View>
            </View>

            <View style={{ marginTop: 45 }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                My Rewards
              </Text>
            </View>

            <View style={styles.cards}>
              <View style={{ flexDirection: "row", marginTop: 30 }}>
                <View>
                  <Text >
                    {"\t\t\t"}45 min Runing
                  </Text>
                </View>
                <View>
                  <Text>
                    {"\t\t"}4.56 km
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.cards}>
              <View style={{ flexDirection: "row", marginTop: 30 }}>
                <View>
                  <Text >
                    {"\t\t\t"}30 min Biking
                  </Text>
                </View>
                <View>
                  <Text>
                    {"\t\t"}2.21 km
                  </Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </View >
    );
  }
};
const styles = StyleSheet.create({

  card: {
    alignSelf: "center",
    width: 350,
    height: 80,
    marginTop: 10,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  cards: {
    alignSelf: "center",
    width: 350,
    height: 80,
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
  },
  status: {
    alignSelf: "center",
    width: 300,
    height: 80,
    marginTop: 40,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
  },
  button: {
    alignSelf: "center",
    width: 300,
    height: 60,
    marginTop: 80,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
  },
});