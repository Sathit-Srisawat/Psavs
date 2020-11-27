import * as React from 'react';
import { Text, View, Button,Stack } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from "./screens/Home";
import Food from "./screens/Food";
import Exercise from "./screens/Exercise";
import Profile from "./screens/Profile";
import Report from "./screens/Report";
import Eaten from "./screens/Eaten";
import Exc from "./screens/Exc";
import Information from "./screens/Infomation";
import Goal from "./screens/Goal";

const Tab = createBottomTabNavigator();

Entypo.loadFont();

function Blank() {
  return (
    <View></View>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name == 'Home') {
      iconName = 'home';
    } else if (route.name == 'Food') {
      iconName = 'bowl';
    } else if (route.name == 'Exercise') {
      iconName = 'dribbble';
    } else if (route.name == 'Profile') {
      iconName = 'user';
    } else if (route.name == 'Personal') {
      iconName = 'v-card';
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Food" component={Food} />
      <Tab.Screen name="Exercise" component={Exercise} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home Workout" component={HomeScreen} />
        <Drawer.Screen name="Personal information" component={Information} />
        <Drawer.Screen name="Report" component={Report} />
        <Drawer.Screen name="Goal" component={Goal} />
        <Drawer.Screen name="Eaten to day" component={Eaten} />
        <Drawer.Screen name="Exercised to day" component={Exc} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}