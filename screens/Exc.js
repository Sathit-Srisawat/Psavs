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
  FlatList
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


  render() {
    return (
      <View style = {{flex : 1}}>
         <View style = {{margin : 50}}>
           <Text style = {{textAlign : "center" , fontSize : 30 , fontWeight : "600"}}>
             Exercise to day
           </Text>
         </View>
         
         <View>
           <Text>
             
           </Text>
         </View>
      </View>
    );
  }
};