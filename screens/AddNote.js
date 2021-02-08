import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, TextInput, FlatList, YellowBox, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default class TimeTable extends React.Component {

  notes = () => {
    fetch('http://172.19.173.122/NSCs/note.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        note : this.state.Note
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.card}>
          <View style={styles.cards}>
            <View>
              <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 25 }}>
                Note
              </Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
              <Icon name="book" size={19} color="#900" />
              <TextInput
                style={{ marginLeft: 20, borderWidth: 1, borderColor: '#CBC1C1', marginRight: 100, height: 440, width: 270 }}
                placeholder='   Write Note'
                onChangeText={(Note) => this.setState({Note})}
              />
            </View>

            <View style={{ marginTop: 35, backgroundColor: "#EEE9E9", marginLeft: 50, marginRight: 50, borderRadius: 15 }}>
              <Button
                onPress={this.onPressLearnMore}
                title='บันทึก'
                onPress={this.notes}
              />
            </View>

          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardss: {
    width: 350,
    height: 200,
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  card: {
    flex: 1,
    width: 390,
    height: 300,
    backgroundColor: '#145374',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  cards: {
    width: 350,
    height: 600,
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
});