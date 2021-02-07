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
  Dimensions
} from 'react-native';

export default class setting extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#75cfb8' }}>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            style={{ backgroundColor: '#fff', height: 50, borderColor: 'gray', borderRadius: 15, marginTop: 10, width: 350 }}
            placeholder='     search'
            onChangeText={(time) => this.setState({ time })}
          />
        </View>

        <View style={styles.cards}>
          <View style={styles.cardin}>
            <ScrollView>
              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                  <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                  <View>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>นาย สมชาย จงเจริญ</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อายุ 29 ปี</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                  <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                  <View>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>นาย สมชาย จงเจริญ</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อายุ 29 ปี</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                  <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                  <View>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>นาย สมชาย จงเจริญ</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อายุ 29 ปี</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                  <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                  <View>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>นาย สมชาย จงเจริญ</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อายุ 29 ปี</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                  <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                  <View>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>นาย สมชาย จงเจริญ</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อายุ 29 ปี</Text>
                    <Text style={{ color: '#fff', marginLeft: 20, marginTop: 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
                </TouchableOpacity>
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
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    top: 130,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cardin: {
    alignSelf: 'center',
    width: 390,
    height: 540,
    marginTop: 20,
    backgroundColor: "#fff",
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

});