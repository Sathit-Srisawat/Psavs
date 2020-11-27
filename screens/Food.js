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

Icon.loadFont();
export default class Food extends React.Component {

  state = {
    data: [],
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3004/suggest'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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
            <View style = {{margin : 10}}>
              <Text>
                Breakfast                
              </Text>

              <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ color: "#000" }}>
                        {item.menu}
                      </Text>
                    </View>
                  }
                />

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
});