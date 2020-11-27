import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert,navigation } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={{height: 270, width: Dimensions.get('window').width }} source={require('../img/7.jpg')} />
        <View style={{ flex: 0.25, position: 'absolute' , marginLeft : 30}}>
          <View style={{ marginTop: 50, marginLeft: 30 }}>
            <Text style={{ color: "#FFF", fontSize: 25, fontWeight: '600' }}>
              HOME WORKOUT
            </Text>
          </View>

          <View style={{ justifyContent: 'center', marginTop: 40, flexDirection: 'row' }}>

            <View style={{ alignItems: 'center' }} >
              <View>
                <Text style={{ color: '#FFF', fontSize: 15 }}>
                  0
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
                  0
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
                  0
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
            </View>
          </View>

          <View style = {{margin : 20}}>
            <Text>
              Training plans
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style = {styles.cards}>
              <Text style={{ color: '#000', fontSize: 15, margin: 10 }}>
                Exercise
              </Text>
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style = {styles.cards}>
              <Text style={{ color: '#000', fontSize: 15, margin: 10 }}>
                Food
              </Text>    
            </View>
          </View>

        </View>
      </View> //end
    );
  }
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

  cards: {
    width: 350,
    height: 150,
    marginTop: 20,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
  }
});
