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

export default class Profile extends React.Component {
  state = {
    data: [],
    datas: [],
    datass: []
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3001/profile');
    const testTable = await response.json();
    this.setState({ data: testTable });
  }
  componentDidMount = () => {
    this.fetchData();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: 300, width: Dimensions.get('window').width }} source={require('../img/1.png')} />
        <View style={{ position: 'absolute', marginLeft: 30 }}>
          <View style={{ marginTop: 50, alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "900", color: "#000", fontWeight: "600" }}>
              Profile
            </Text>
          </View>

          <View style={{ marginTop: 10, alignItems: "center" }}>
            <Image style={{ width: 100, height: 100, borderRadius: 15 }} source={require('../img/1.png')} />
          </View>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <View>
                  <Text style={{ color: "#000", fontSize: 20, fontWeight: '900' }}>
                    {item.name}
                  </Text>
                </View>
              }
            />
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: "#000", fontSize: 15, fontWeight: '600' }}>
              Doctor Profile
            </Text>
          </View>

          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <View>
                    <Text style={{ color: "#000", fontSize: 15, alignSelf: 'center', marginTop: 15 }}>
                      {item.hospital}
                    </Text>
                  </View>
                }
              />
            </View>

            <View style={styles.status}>
              <View style = {{marginTop : 20}}>
                <Text style = {{alignSelf : 'center' , fontSize : 20 ,margin : 10 }}>ข้อมูลส่วนตัว</Text>
                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style = {{marginTop : 20}}>
                      <Text style={{ color: "#000", fontSize: 15, alignSelf: 'center' }}>
                        {'\t'}{item.name}{'\t'} อายุ {item.age}
                      </Text>
                    </View>
                  }
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <View >
                  <Text>
                    {"\t"} email {'\t'}:{'\n'}{'\n'}{'\t'} phone {'\t'}:
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                      <View>
                        <Text style={{ color: "#000", fontSize: 15, alignSelf: 'center' }}>
                          {'\t'}{item.email}{'\n\n\t'}{item.phone}{'\n'}{ }
                        </Text>
                      </View>
                    }
                  />
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
    width: 340,
    height: 380,
    marginTop: 80,
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
  cardse: {
    alignSelf: "center",
    width: 250,
    height: 60,
    marginTop: 40,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
  },
});