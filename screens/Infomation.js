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
import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
export default class Food extends React.Component {


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.4 }}>
          <Image style={{ height: 300, width: Dimensions.get('window').width }} source={require('../img/4.jpg')} />
          <View style={{ position: 'absolute', top: 160, left: 20, right: 0, bottom: 20 }}>
            <Text style={{ fontSize: 50, fontWeight: '800', color: '#fff' }}>
                Personal Information
            </Text>
          </View>

        <View style={styles.cards}>

            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                Height
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                placeholder='cm'
              />
            </View>

            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                Width
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                placeholder='kg'
              />
            </View>

            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                Age
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                placeholder='year'
              />
            </View>

            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                Sex
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                color = '#f6f5f5'
                placeholder='female or male'
              />
            </View>
            <View style = {styles.button}>
                <Button
                    title = "confirm"
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

  button: {
    marginLeft : Dimensions.get('window').width / 3,
    width: 150,
    height: 50,
    marginTop: 60,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
  }
});