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
export default class Food extends React.Component {

  state = {
    dataB: [],
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
          <Image style={{ height: 300, width: Dimensions.get('window').width }} source={require('../img/2.jpg')} />
          <View style={{ position: 'absolute', top: 160, left: 20, right: 0, bottom: 20 }}>
            <Text style={{ fontSize: 50, fontWeight: '800', color: '#fff' }}>
              Suggest Food For You
            </Text>
          </View>
          <View style={styles.cards}>
            <ScrollView horizontal={true}>
              <View style={{ alignItems: 'center', marginLeft: 25 }}>
                <View style={styles.card1}>
                  <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 30, fontWeight: '800' }}>
                    Breakfast
                  </Text>
                  <View style={{ alignItems: 'center' }}>
                    <View style={styles.cardin}>
                      <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                          <View style={{ marginTop: 10, alignItems: 'center' }}>
                            {item.status = "Under Weight" ?
                              <Swiper
                                style={styles.wrapper}
                                loop={true}
                                autoplay={true}
                                style={{ borderRadius: 15 }} >
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>แซนด์วิชทูน่า</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/breakfast/1.jpg')} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>ข้าวต้มกุ้ง 1 ชาม</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15 }} source={require('../imgfood/breakfast/2.jpg')} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>ซีเรียลโฮลวีท 45 กรัม + นม 125 มล.</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/breakfast/3.jpg')} />
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

              <View style={{ alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                <View style={styles.card1}>
                  <Text style={{ marginTop: 20, marginLeft : 20, fontSize: 30, fontWeight: '800' }}>
                    Lunch
                  </Text>
                  <View style={{ alignItems: 'center' }}>
                    <View style={styles.cardin}>
                      <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                          <View style={{ marginTop: 10, alignItems: 'center' }}>
                            {item.status = "Under Weight" ?
                              <Swiper
                                style={styles.wrapper}
                                loop={true}
                                autoplay={true}
                                style={{ borderRadius: 15 }} >
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>เส้นใหญ่ลูกชิ้นน้ำ 1 ชาม</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/lunch/1.jpeg')} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>สุกี้น้ำหมู</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15 }} source={require('../imgfood/lunch/2.jpg')} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>ข้าวหน้าไก่เทอริยากิ</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/lunch/3.jpg')} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>ข้าวกะเพราไก่</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/lunch/4.png')} />
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

              <View style={{ alignItems: 'center', marginRight: 25 }}>
                <View style={styles.card1}>
                  <Text style={{ marginTop: 20, marginLeft : 20, fontSize: 30, fontWeight: '800' }}>
                    Dinner
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.cardin}>
                      <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                          <View style={{ marginTop: 10, alignItems: 'center' }}>
                            {item.status = "Under Weight" ?
                              <Swiper
                                style={styles.wrapper}
                                loop={true}
                                autoplay={true}
                                style={{ borderRadius: 15 }} >
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>ข้าวกล้อง 2 ทัพพี + แกงส้มผักรวม</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/breakfast/4.jpg')} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>ข้าวสวย 2 ทัพพี + ต้มจับฉ่าย</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/breakfast/5.jpeg')} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>บะหมี่ต้มยำ 1 ชาม</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/breakfast/6.jpg')} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                  <Text style={{ fontSize: 20, fontWeight: '800' }}>ข้าวกล้อง 2 ทัพพี - ผัดเปรี้ยวหวานไก่</Text>
                                  <Image style={{ marginTop : 20,height: 300, width: 300 , borderRadius : 15}} source={require('../imgfood/breakfast/7.jpg')} />
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

            </ScrollView>

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
  card1: {
    width: 360,
    height: 500,
    marginTop : 20,
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
  cardin: {
    width: 340,
    height: 410,
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