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

    update = () => {
        fetch('http://172.19.173.122/NSCs/update.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Username: this.state.username,
            Name: this.state.name,
            Age: this.state.age,
            Phone: this.state.phone,
            Email: this.state.email,
            Hospital: this.state.hospital,
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
              onChangeText={(username) => this.setState({ username })}
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
              onChangeText={(hospital) => this.setState({ hospital })}
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
              onChangeText={(name) => this.setState({ name })}
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
              onChangeText={(age) => this.setState({ age })}
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
              onChangeText={(phone) => this.setState({ phone })}
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
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.button}>
              <Button
                title="บันทึก"
                onPress={this.update}
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