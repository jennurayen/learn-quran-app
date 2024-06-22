import React from 'react';
import {StyleSheet} from 'react-native';

//page
import TopTab from './TopTab';
import NavigationButtomTab from './NavigationButtomTab';
import SuraDetails from './SuraDetails';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        
        {/* <Stack.Screen name="QuranSura" component={TopTab} options={{headerShown: false}}/> */}
        <Stack.Screen name="TabButtomPage" component={NavigationButtomTab} options={{headerShown: false}} />
        <Stack.Screen name="SuraDetails" component={SuraDetails} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
