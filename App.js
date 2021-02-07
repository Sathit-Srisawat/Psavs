import * as React from 'react';
import { Text, View, Button, Stack, Image, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from "./screens/Home";
import Add from "./screens/Add";
import Setting from "./screens/Setting";
import EditProfile from "./screens/EditProfile";

const Tab = createBottomTabNavigator();

Entypo.loadFont();

function Blank() {
  return (
    <View></View>
  );
}


class Food extends React.Component navigation {
  render() {
    return (
      <View style={styles.cards}>
      <View style={styles.cardin}>
        <ScrollView>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
              <Image style={{ height: 80, width: 80 }} source={require('./img/1.png')} />
              <View>
                <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10}}>นาย สมชาย จงเจริญ</Text>
                <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อายุ 29 ปี</Text>
                <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อัฟเดท : 09/06/63</Text>
                </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </View>
        </View>
    );
  }
};


function HomeStackScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#75cfb8' }}>
      <View style={{alignItems: 'center' }}>
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
                <Image style={{ height: 80, width: 80 }} source={require('./img/1.png')} />
                <View>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10}}>นาย สมชาย จงเจริญ</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อายุ 29 ปี</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                <Image style={{ height: 80, width: 80 }} source={require('./img/1.png')} />
                <View>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10}}>นาย สมชาย จงเจริญ</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อายุ 29 ปี</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                <Image style={{ height: 80, width: 80 }} source={require('./img/1.png')} />
                <View>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10}}>นาย สมชาย จงเจริญ</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อายุ 29 ปี</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                <Image style={{ height: 80, width: 80 }} source={require('./img/1.png')} />
                <View>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10}}>นาย สมชาย จงเจริญ</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อายุ 29 ปี</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} style={{ flexDirection: 'row' }}>
                <Image style={{ height: 80, width: 80 }} source={require('./img/1.png')} />
                <View>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10}}>นาย สมชาย จงเจริญ</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อายุ 29 ปี</Text>
                  <Text style={{ color: '#fff', marginLeft: 20 ,marginTop : 10 }}>อัฟเดท : 09/06/63</Text>
                  </View>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>

      </View>
    </View>
  );
}


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#75cfb8' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignItems: 'flex-start', marginTop: 10 }}>
          <Image style={{ height: 150, width: 150 }} source={require('./img/1.png')} />
        </View>
        <View style={{ margin: 30 }}>
          <Text style={{ color: '#fff', marginTop: 10 }}>
            ดร.บริหาร สุขภาพดี
            </Text>
          <Text style={{ color: '#fff', marginTop: 10 }}>
            โรงพยาบาลท่าศาลา
            </Text>
          <Text style={{ color: '#fff', marginTop: 10 }}>
            เบอร์ : 0625417863
            </Text>
          <Text style={{ color: '#fff', marginTop: 10 }}>
            e-mail : boriahan38@gmail.com
            </Text>
        </View>
      </View>
      <View style={styles.cards1}>
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <View style={styles.button}>
            <Button
              title='แก้ไขโปรไฟล์'
              onPress={() => navigation.navigate('Edit Profile')}
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
              onPress={() => navigation.navigate('test')}
            />
          </View>
        </View>
      </View>
    </View>


  );
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="ตั้งค่า" component={SettingsScreen} />
      <SettingsStack.Screen name="Edit Profile" component={EditProfile} />
    </SettingsStack.Navigator>
  );
}

const HomesStack = createStackNavigator();
function HomesStackScreen() {
  return (
    <HomesStack.Navigator>
      <HomesStack.Screen name="Home" component={Food} />
      <SettingsStack.Screen name="Edit Profile" component={EditProfile} />
    </HomesStack.Navigator>
  );
}


const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name == 'Home') {
      iconName = 'home';
    } else if (route.name == 'เพิ่มรายชื่อ') {
      iconName = 'users';
    } else if (route.name == 'ตั้งค่า') {
      iconName = 'cog';
    }
    return <Entypo name={iconName} size={size} color={color} />;
  },
});


function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: '#3282b8',
        inactiveTintColor: '#464962',
      }}
    >
      <Tab.Screen name="Home" component={HomesStackScreen} />
      <Tab.Screen name="เพิ่มรายชื่อ" component={Add} />
      <Tab.Screen name="ตั้งค่า" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  cards: {
    alignSelf: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cards1: {
    alignSelf: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    top: 160,
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
  },

  cardin: {

    alignSelf: 'center',
    width: 390,
    height: 600,
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
  cardin: {

    alignSelf: 'center',
    width: 390,
    height: 600,
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
  buttons: {
    alignSelf: 'center',
    width: 350,
    height: 100,
    marginTop: 30,
    backgroundColor: "#1687a7",
    borderRadius: 15,
    elevation: 10,
  },

});