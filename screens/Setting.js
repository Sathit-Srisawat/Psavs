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





export default class Setting extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#75cfb8' }}>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Text style={{ fontSize: 25, color: '#fff' }}>
            ตั้งค่า
          </Text>
        </View>
        <View style = {{flexDirection : 'row'}}> 
          <View style={{ alignItems: 'flex-start', marginTop: 10 }}>
            <Image style={{ height: 150, width: 150 }} source={require('../img/1.png')} />
          </View>
          <View style = {{margin : 30}}>
            <Text style = {{color : '#fff' , marginTop : 10}}>
              ดร.บริหาร สุขภาพดี
            </Text>
            <Text style = {{color : '#fff', marginTop : 10}}>
              โรงพยาบาลท่าศาลา
            </Text>
            <Text style = {{color : '#fff', marginTop : 10}}>
              เบอร์ : 0625417863
            </Text>
            <Text style = {{color : '#fff', marginTop : 10}}>
              e-mail : boriahan38@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.cards}>
          <View style = {{alignItems : 'center' ,marginTop : 30}}>
            <View style = {styles.button}>
              <Button 
                title = 'แก้ไขโปรไฟล์'
              />
            </View>

            <View style = {styles.button}>
              <Button 
                title = 'จัดเรียงรายชื่อ'
              />
            </View>

            <View style = {styles.button}>
              <Button 
                title = 'อัฟเดทเวลาล่าสุด'
              />
            </View>

            <View style = {styles.button}>
              <Button 
                title = 'ออกจากระบบ'
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
    top: 250,
    left: 0,
    right: 0,
    bottom: 0,
  },

  button: {
    width: 300,
    height: 50,
    marginTop: 30,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
  }
});