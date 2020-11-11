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

import Icons from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();
export default class Food extends React.Component {

  render() {

    this.state = {
      exc : [],
      time : []
    }

    return (
      <View style={{ flex: 1 , backgroundColor : "#fff"}}>
        <View style={{ flex: 0.3, backgroundColor: "#3FA4F0", borderBottomEndRadius: 120 }}>
          <View style={{ marginTop: 50 }}>
            <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "600", color: "#fff" }}>
              Exercise to day
            </Text>
          </View>

          <View>
            <Text style = {{color : '#fff' , fontSize : 20 ,fontWeight : '500', margin : 20}}>
              Exercise 
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <DropDownPicker
              items={[
                { label: 'Lunges', value: 1, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Pushups', value: 2, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Squats', value: 3, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Standing overhead dumbbell presses', value: 4, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Dumbbell rows', value: 5, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Single-leg deadlifts', value: 6, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Burpees', value: 7, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Side planks', value: 8, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Planks', value: 9, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'Glute bridge', value: 10, icon: () => <Icon name="flag" size={18} color="#900" /> },
              ]}

              multiple={true}
              multipleText="%d items have been selected."
              min={0}
              max={20}

              defaultValue={this.state.exc}
              containerStyle={{ height: 40, width: 350 }}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                exc: item // an array of the selected items
              })}
            />
          </View>

          <View>
            <Text style = {{color : '#fff' , fontSize : 20 ,fontWeight : '500', marginTop : 50 , marginLeft : 20}}>
              How long
            </Text>
          </View>

          <View style = {{ marginTop : 20 , alignItems : 'center'}}>
            <DropDownPicker
              items={[
                { label: '1 min', value: 1, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '2 min', value: 2, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '3 min', value: 3, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '4 min', value: 4, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '5 min', value: 5, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '6 min', value: 6, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '7 min', value: 7, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '8 min', value: 8, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '9 min', value: 9, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '10 min', value: 10, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '11 min', value: 11, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '12 min', value: 12, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '13 min', value: 13, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '14 min', value: 14, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '15 min', value: 15, icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: '16 min', value: 16, icon: () => <Icon name="flag" size={18} color="#900" /> },
              ]}

              multiple={true}
              multipleText="%d items have been selected."
              min={0}
              max={20}

              defaultValue={this.state.time}
              containerStyle={{ height: 40, width: 350 }}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                time: item // an array of the selected items
              })}
            />
          </View>

          <View style={styles.cards} >
            <Button
              title="OK"
            />
          </View>

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cards: {
    alignSelf: "center",
    width: 100,
    height: 40,
    marginTop: 50,
    backgroundColor: '#FFF',

    elevation: 10,
  },
});