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


  state = {
    dataB: [],
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3001/profile'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });

  }

  componentDidMount = () => {
    this.fetchData();
  }



  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#75cfb8' }}>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Text style={{ fontSize: 25, color: '#fff' }}>
            ตั้งค่า
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'flex-start', marginTop: 10 }}>
            <Image style={{ height: 150, width: 150 }} source={require('../img/1.png')} />
          </View>

          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <View style={{ margin: 30 }}>
                <Text style={{ color: '#fff', marginTop: 10 }}>
                  {item.name}
                </Text>
                <Text style={{ color: '#fff', marginTop: 10 }}>
                {item.hospital}
                </Text>
                <Text style={{ color: '#fff', marginTop: 10 }}>
                  เบอร์ : {item.phone}
                </Text>
                <Text style={{ color: '#fff', marginTop: 10 }}>
                  e-mail : {item.email}
                </Text>
              </View>
            }
          />
        </View>
        <View style={styles.cards}>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <View style={styles.button}>
              <Button
                title='แก้ไขโปรไฟล์'
              />
            </View>

            <View style={styles.button}>
              <Button
                title='จัดเรียงรายชื่อ'
              />
            </View>

            <View style={styles.button}>
              <Button
                title='อัฟเดทเวลาล่าสุด'
              />
            </View>

            <View style={styles.button}>
              <Button
                title='ออกจากระบบ'
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