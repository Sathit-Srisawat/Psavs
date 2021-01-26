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
    const response = await fetch('http://localhost:3004/suggestF'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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
            <ScrollView>
            <View style = {{margin : 10}}>
              <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style={{ marginTop: 10 , alignItems : 'center'}}>
                      <Text style={{ color: "#000" }}>
                        {'\n'}
                        {item.menu}
                        {'\n'}
                        {item.menu == "Milk" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Milk.jpg')} /> : null}
                        {item.menu == "Agg" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Agg.jpg')} /> : null}
                        {item.menu == "Legumes" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Legumes.jpg')} /> : null}
                        {item.menu == "Red meat" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Red_meat.png')} /> : null}
                        {item.menu == "potato" ? <Image style={{ height: 350, width: 350 }} source={require('../img/potato.jpg')} /> : null}
                        {item.menu == "Salmon" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Salmon.png')} /> : null}
                        {item.menu == "Whey protein" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Whey_protein.jpg')} /> : null}
                        {item.menu == "Whole grain bread" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Whole_grain_bread.jpeg')} /> : null}
                        {item.menu == "Avocado" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Avocado.jpg')} /> : null}
                        {item.menu == "Cereals" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Cereals.jpg')} /> : null}
                        {item.menu == "Dark chocolate" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Dark_chocolate.jpg')} /> : null}
                        {item.menu == "Yoghurt with fat" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Yoghurt_with_fat.jpg')} /> : null}
                      </Text>
                    </View>
                  }
                />

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
});