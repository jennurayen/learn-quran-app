import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

// icons


//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//page
import Home from './page/Home';
import Quran from './page/Quran';
import Web from './page/Web';
// svg
import HomeSvg from './assets/svg/HomeSvg';
import QuranSvg from './assets/svg/QuranSvg';
import WorldSvg from './assets/svg/WorldSvg';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => { 
         
          if (route.name === 'Home') {
             return focused ? <HomeSvg fill='tomato'/>: <HomeSvg />
          }
           else if (route.name === 'Quran') {
            return focused ?  <QuranSvg fill='tomato'/> : <QuranSvg />
          }
           else if (route.name === 'Web') {
            return focused ?  <WorldSvg fill='tomato'/>: <WorldSvg />
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        
      })}
      >
      <Tab.Screen name="Home" component={Home} options={{}}/>
      <Tab.Screen name="Quran" component={Quran} />
      <Tab.Screen name="Web" component={Web} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})