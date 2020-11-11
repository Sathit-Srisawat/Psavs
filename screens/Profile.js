import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  Image
} from 'react-native';

import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';

//const Profile: () => React$Node = ({ route }) => 
export default class Profile extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.35, backgroundColor: "#00587a" }}>
          <View style={{ marginTop: 50, alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff", fontWeight: "600" }}>
              Profile
            </Text>
          </View>

          <View style={{ marginTop: 10, alignItems: "center" }}>
            <Image style={{ width: 100, height: 100, borderRadius: 15 }} source={require('../img/1.png')} />
          </View>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Sathit Srisawat
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: "#fff", fontSize: 10 }}>
              WU | Compter Engineering
            </Text>
          </View>

          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>

              <View style={{ alignItems: "center", marginRight: 15, marginLeft: 15 }}>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ color: "#000" }}>
                    21
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>
                    AGE
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 30, alignSelf: "center" }}>|</Text>
              <View style={{ alignItems: "center", marginLeft: 15, marginRight: 15 }}>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ color: "#000" }}>
                    64
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>
                    Weight
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 30, alignSelf: "center" }}>|</Text>
              <View style={{ alignItems: "center", marginLeft: 15, marginRight: 15 }}>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ color: "#000" }}>
                    21
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text>
                    Height
                  </Text>
                </View>
              </View>

            </View>

            <View style={{ marginTop: 45 }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                My Rewards
              </Text>
            </View>

            <View style={styles.cards}>
              <View style={{ flexDirection: "row" , marginTop : 30}}>
                <View>
                  <Text >
                    {"\t\t\t"}45 min Runing
                  </Text>
                </View>
                <View>
                  <Text>
                    {"\t\t"}4.56 km
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.cards}>
              <View style={{ flexDirection: "row" , marginTop : 30}}>
                <View>
                  <Text >
                    {"\t\t\t"}30 min Biking
                  </Text>
                </View>
                <View>
                  <Text>
                    {"\t\t"}2.21 km
                  </Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </View >
    );
  }
};
const styles = StyleSheet.create({

  card: {
    alignSelf: "center",
    width: 350,
    height: 80,
    marginTop: 10,
    backgroundColor: '#FFF',
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
    alignSelf: "center",
    width: 350,
    height: 80,
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
  },
});