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
export default class Exercise extends React.Component {

  state = {
    data: [],
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3005/suggestEx'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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
            <ScrollView>
              <View style={{ margin: 10 }}>
                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style={{ marginTop: 10 , alignItems : 'center'}}>
                      <Text style={{ color: "#000" }}>
                        {'\n'}
                        {item.style}
                        {'\n'}
                        {item.style == "Jump up Burpee" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Jump_up_Burpee.jpg')} /> : null}
                        {item.style == "Lunges" ? <Image style={{ height: 350, width: 350 }} source={require('../img/lunges.jpg')} /> : null}
                        {item.style == "Mountain Climber" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Mountain_Climber.jpg')} /> : null}
                        {item.style == "Plank" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Plank.jpg')} /> : null}
                        {item.style == "Push Ups" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Push_Ups.jpg')} /> : null}
                        {item.style == "Reverse Crunch" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Reverse_Crunch.png')} /> : null}
                        {item.style == "Sit Ups" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Sit_Ups.jpg')} /> : null}
                        {item.style == "Squat" ? <Image style={{ height: 350, width: 350 }} source={require('../img/Squat.jpg')} /> : null}                        
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

  card: {
    alignSelf: "center",
    margin : 10,
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height - 380,
    backgroundColor: '#000',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    
  },
});