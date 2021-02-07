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
  Alert,
  TextInput
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
export default class Food extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#75cfb8' }}>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Image style={{ height: 150, width: 150 }} source={require('../img/1.png')} />
        </View>
        <View style={styles.cards}>

        <View style={{ marginLeft: 20 ,marginTop : 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              Username
              </Text>
          </View>

          <View style={{ alignItems: 'center', }}>
            <TextInput
              style={{ height: 40, width: 300 }}
              placeholder='Username'
              onChangeText={(Height) => this.setState({ Height })}
            />
          </View>

          <View style={{ marginLeft: 20 ,marginTop : 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              โรงพยาบาล
            </Text>
          </View>

          <View style={{ alignItems: 'center', }}>
            <TextInput
              style={{ height: 40, width: 300 }}
              placeholder='โรงพยาบาล'
              onChangeText={(Height) => this.setState({ Height })}
            />
          </View>

          <View style={{ marginLeft: 20 ,marginTop : 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              ชื่อ - นามสกุล
              </Text>
          </View>

          <View style={{ alignItems: 'center', }}>
            <TextInput
              style={{ height: 40, width: 300 }}
              placeholder='ชื่อ - นามสกุล'
              onChangeText={(Weight) => this.setState({ Weight })}
            />
          </View>

          <View style={{ marginLeft: 20 ,marginTop : 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              อายุ
              </Text>
          </View>

          <View style={{ alignItems: 'center', }}>
            <TextInput
              style={{ height: 40, width: 300 }}
              placeholder='อายุ'
              onChangeText={(Age) => this.setState({ Age })}
            />
          </View>

          <View style={{marginLeft: 20 ,marginTop : 10}}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              เบอร์ติดต่อ
              </Text>
          </View>

          <View style={{ alignItems: 'center', }}>
            <TextInput
              style={{ height: 40, width: 300 }}
              placeholder='เบอร์ติดต่อ'
              onChangeText={(disease) => this.setState({ disease })}
            />
          </View>

          <View style={{ marginLeft: 20 ,marginTop : 10}}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              E - mail
              </Text>
          </View>

          <View style={{ alignItems: 'center', }}>
            <TextInput
              style={{ height: 40, width: 300 }}
              placeholder='E - mail'
              onChangeText={(disease) => this.setState({ disease })}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.button}>
              <Button
                title="บันทึก"
                onPress={this.insertPersonal}
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
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
    bottom: 0,
  },

  button: {
    width: 250,
    height: 50,
    marginTop: 10,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
  }
});