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

import Icons from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import Home from "./Home";
Icon.loadFont();
export default class Eaten extends React.Component {
  state = {
    food : []
  }

  insertFood = () => {
    fetch('http://172.18.132.101/NSC/Insert_food.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foods: this.state.food[0]
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {

    return (
      <View style={{ flex: 1 }}>
        <View style={{ margin: 50 }}>
          <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "600" }}>
            Eaten to day
           </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <DropDownPicker
            items={[
              { label: 'Papaya salad', value: 'Papaya-salad', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Roast chicken', value: 'Roast-chicken', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Spicy minced beef', value: 'Spicy-minced-beef', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Spicy minced pork', value: 'Spicy-minced-pork', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Spicy minced chicken salad', value: 'Spicy-minced-chicken-salad', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Pickled fish', value: 'Pickled-fish', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Sliced grilled beef salad', value: 'Sliced-grilled-beef-salad', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Rice porridge with shrimp', value: 'Rice-porridge-with-shrimp', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Fried rice', value: 'Fried-rice', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Steamed chicken with rice', value: 'Steamed-chicken-with-rice', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Roasted duck on rice', value: 'Roasted-duck-on-rice', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Fried rice', value: 'Fried-rice', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Rice crispy pork', value: 'Rice-crispy-pork', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Congee', value: 'Congee', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Sour prawn soup', value: 'Sour-prawn-soup', icon: () => <Icon name="flag" size={18} color="#900" /> },
              { label: 'Fried chicken', value: 'Fried-chicken', icon: () => <Icon name="flag" size={18} color="#900" /> },
            ]}

            multiple={true}
            multipleText="%d items have been selected."
            min={0}
            max={1}

            defaultValue={this.state.food}
            containerStyle={{ height: 40, width: 350 }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            onChangeItem={item => this.setState({
              food: item // an array of the selected items
            })}
          />
        </View>

        <View style={styles.cards} >
          <Button
            title="OK"
            onPress={this.insertFood}
          />
        </View>

      </View>
    );
  }
};
const styles = StyleSheet.create({
  cards: {
    alignSelf: "center",
    width: 200,
    height: 40,
    marginTop: 160,
    backgroundColor: '#FFF',
    borderRadius : 15,
    elevation: 10,
  },
});