import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";


export default class Profile extends React.Component {

  state = {
    data: [],
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3006/Goal'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });

  }
  componentDidMount = () => {
    this.fetchData();
  }


  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor : '#fff'}}>
        <Image style={{ height: 270, width: Dimensions.get('window').width, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} source={require('../img/7.jpg')} />
        <View style={{ flex: 0.25, position: 'absolute', marginLeft: 30 }}>
          <View style={{ marginTop: 50, marginLeft: 30 }}>
            <Text style={{ color: "#FFF", fontSize: 25, fontWeight: '600' }}>
              HOME WORKOUT
            </Text>
          </View>

          <View style={{ justifyContent: 'center', marginTop: 40, flexDirection: 'row' }}>

            <View style={{ alignItems: 'center' }} >
              <View>
                <Text style={{ color: '#FFF', fontSize: 15 }}>
                  4/5
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: '#FFF', fontSize: 15 }} >
                  WORKOUT
                </Text>
              </View>
            </View>

            <View style={{ marginLeft: 50, alignItems: 'center' }}>
              <View>
                <Text style={{ color: '#FFF', fontSize: 15 }}>
                  4125
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: '#FFF', fontSize: 15 }}>
                  KCAL
                </Text>
              </View>
            </View>

            <View style={{ marginLeft: 50, alignItems: 'center' }} >
              <View>
                <Text style={{ color: '#FFF', fontSize: 15 }} >
                  134
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: '#FFF', fontSize: 15 }}>
                  MINUTE
                </Text>
              </View>
            </View>

          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={styles.card}>
              <Text style={{ color: '#000', fontSize: 15, margin: 10 }}>
                GOAL
              </Text>


              <Text style={{ alignSelf: 'center', color: '#000', fontSize: 15, margin: 10 }}>
                Gain weight 30 kg in 1 mount
              </Text>


              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "#000" }}>
                      {item.Goal}
                    </Text>
                  </View>
                }
              />

            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={styles.card1}>
              <Text style={{ marginTop: 20,marginLeft :20 }}>
                Progress
              </Text>

              <ProgressChart
                style = {{borderRadius : 15 }}
                data={data}
                width={325}
                height={160}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
              />

            </View>
          </View>

          <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>

            <View style={styles.card2}>
              <View>
                <Text style={{ margin: 20 ,fontSize : 20 ,fontWeight : '800'}}>
                  Schedule today
                </Text>

                <Text style = {{textAlign : 'center', marginTop : 10,fontSize : 20 ,fontWeight : '800'}}>
                  Exercise
                </Text>
              </View>
            </View>

            <View style={styles.card2}>
              <View>
                <Text style={{ margin: 20 ,fontSize : 20 ,fontWeight : '800'}}>
                  Date
                </Text>

                <Text style={{ margin: 10, marginLeft : 40 ,fontSize : 20 ,fontWeight : '800'}}>
                  26 {'\n'} {'\t'}01 {'\n'}{'\t\t'}64
                </Text>
              </View>
            </View>

          </View>

        </View>
      </View> //end
    );
  }
};

const data = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};
const chartConfig = {

  backgroundGradientFrom: "#FFF",
  backgroundGradientFromOpacity: 5,
  backgroundGradientTo: "#FFF",
  backgroundGradientToOpacity: 5,
  color: (opacity = 1) => `rgba(70 , 52, 37, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.8,
  useShadowColorFromDataset: false // optional
  
};


const styles = StyleSheet.create({

  card: {
    width: 350,
    height: 150,
    marginTop: 20,
    backgroundColor: "#f6f5f5",
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
  card1: {
    width: 325,
    height: 210,
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
  card2: {
    width: 150,
    height: 200,
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
    marginLeft: 20
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});
