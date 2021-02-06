import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions,
  navigation,
  FlatList,
  Image
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'

Icon.loadFont();
export default class Exercise extends React.Component {

  state = {
    data: [],
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3001/Personal'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.4 }}>
          <Image style={{ height: 300, width: Dimensions.get('window').width }} source={require('../img/3.jpg')} />
          <View style={{ position: 'absolute', top: 160, left: 20, right: 20, bottom: 20 }}>
            <Text style={{ fontSize: 45, fontWeight: '800', color: '#fff' }}>
              Suggest Exercise For You
            </Text>
          </View>
          <View style={styles.cards}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.card1}>
                <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 30, fontWeight: '800' }}>
                  Exercise
                </Text>
                <View style={{ alignItems: 'center' }}>
                  <View style={styles.cardin}>
                    <FlatList
                      data={this.state.data}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item }) =>
                        <View style={{ marginTop: 25, alignItems: 'center' }}>
                          {item.status = "Under Weight" ?
                            <Swiper
                              style={styles.wrapper}
                              loop={true}
                              autoplay={true}
                              style={{ borderRadius: 15 }} >
                              <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>Jump up Burpee</Text>
                                <Image style={{ marginTop: 20, height: 300, width: 300, borderRadius: 15 }} source={require('../imgexercise/under/Jump_up_Burpee.jpeg')} />
                              </View>
                              <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>Lunges</Text>
                                <Image style={{ marginTop: 20, height: 300, width: 300, borderRadius: 15 }} source={require('../imgexercise/under/Lunges.jpg')} />
                              </View>
                              <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>Mountain Climber</Text>
                                <Image style={{ marginTop: 20, height: 300, width: 300, borderRadius: 15 }} source={require('../imgexercise/under/Mountain_Climber.png')} />
                              </View>
                              <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>Plank</Text>
                                <Image style={{ marginTop: 20, height: 300, width: 300, borderRadius: 15 }} source={require('../imgexercise/under/Plank.jpg')} />
                              </View>
                              <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>Push Ups</Text>
                                <Image style={{ marginTop: 20, height: 300, width: 300, borderRadius: 15 }} source={require('../imgexercise/under/Push_Ups.jpg')} />
                              </View>
                              <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>Reverse Crunch</Text>
                                <Image style={{ marginTop: 20, height: 300, width: 300, borderRadius: 15 }} source={require('../imgexercise/under/Reverse_Crunch.png')} />
                              </View>
                              <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>Sit Ups</Text>
                                <Image style={{ marginTop: 20, height: 300, width: 300, borderRadius: 15 }} source={require('../imgexercise/under/Sit_Ups.jpg')} />
                              </View>
                              <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>Aquat</Text>
                                <Image style={{ marginTop: 20, height: 300, width: 300, borderRadius: 15 }} source={require('../imgexercise/under/Aquat.jpg')} />
                              </View>
                            </Swiper>
                            : null}
                        </View>
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({

  cards: {
    alignSelf: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    top: 280,
    left: 0,
    right: 0,
    bottom: 0,
  },

  card: {
    alignSelf: "center",
    margin: 10,
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height - 380,
    backgroundColor: '#000',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
  },
  card1: {
    alignItems: 'center',
    width: 360,
    height: 500,
    marginTop: 20,
    backgroundColor: "#fff",
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
});