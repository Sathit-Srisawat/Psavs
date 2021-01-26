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
  Image,
  Alert
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

export default class Food extends React.Component {



  render() {
    return (
      <View>
        <ProgressChart
          data={data}
          width={350}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </View>
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
  color: (opacity = 15) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
