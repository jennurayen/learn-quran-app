import React from 'react';
import {StyleSheet} from 'react-native';

//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//page
import HomeButtomTab from './HomeButtomTab';
import QuranButtomTab from './QuranButtomTab';
import WebButtomTab from './WebButtomTab';
// svg
import HomeSvg from '../assets/svg/HomeSvg';
import QuranSvg from '../assets/svg/QuranSvg';
import WorldSvg from '../assets/svg/WorldSvg';

const Tab = createBottomTabNavigator();

const NavigationButtomTab = () => {
  return (
    
      <Tab.Navigator
            screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return focused ? <HomeSvg fill="tomato" /> : <HomeSvg />;
            } else if (route.name === 'Quran') {
              return focused ? <QuranSvg fill="tomato" /> : <QuranSvg />;
            } else if (route.name === 'Web') {
              return focused ? <WorldSvg fill="tomato" /> : <WorldSvg />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="Quran" component={QuranButtomTab} />
        <Tab.Screen name="Home" component={HomeButtomTab} />
        <Tab.Screen name="Web" component={WebButtomTab} />
      </Tab.Navigator>

    
  );
};

export default NavigationButtomTab;

const styles = StyleSheet.create({});
