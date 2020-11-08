import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Report extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.50, borderBottomWidth: 0.5, borderBottomColor: '#7e7474' }}>
          <View style={{ marginTop: 50, marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>
              REPORT
            </Text>
          </View>
        </View>

        <View style={styles.card}>

          <View style={{ justifyContent: 'center', marginTop: 40, flexDirection: 'row' }}>

            <View style={{ alignItems: 'center' }} >
              <View>
                <Text style={{ color: '#fff', fontSize: 25, fontWeight: '700' }}>
                  0
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700' }} >
                  WORKOUT
                </Text>
              </View>
            </View>


            <View style={{ marginLeft: 50, alignItems: 'center' }} >
              <View>
                <Text style={{ color: '#fff', fontSize: 25, fontWeight: '700' }}>
                  0
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700' }} >
                  KACL
                </Text>
              </View>
            </View>


            <View style={{ marginLeft: 50, alignItems: 'center' }} >
              <View>
                <Text style={{ color: '#fff', fontSize: 25, fontWeight: '700' }}>
                  0
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700' }} >
                  MINUTE
                </Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView >
          <View style={styles.cards}>
            <View>
              <Text style={{ margin: 20, fontSize: 20, fontWeight: '600' }}>
                Weight
              </Text>
            </View>
            <View>
              <Text style={{ marginLeft: 30, marginTop: 10 }}>
                Current
              </Text>
            </View>
            <View>
              <Text style={{ marginLeft: 30, marginTop: 15 }}>
                Heaviest
              </Text>
            </View>
            <View>
              <Text style={{ marginLeft: 30, marginTop: 15 }}>
                Lightest
              </Text>
            </View>
          </View>

          <View style={styles.cardss}>
            <View>
              <Text style={{ margin: 20, fontSize: 20, fontWeight: '600' }}>
                BMI(k/m2)
              </Text>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create({

  card: {
    width: 350,
    height: 150,
    marginTop: 20,
    marginLeft: 33,
    backgroundColor: "#9ba4b4",
    borderRadius: 15,
    elevation: 10,
  },

  cards: {
    width: 350,
    height: 200,
    margin: 30,
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
    elevation: 10,
  },

  cardss: {
    width: 350,
    height: 200,
    marginLeft: 30,
    backgroundColor: "#FFF",
    borderRadius: 15,
    elevation: 10,
  }
});
