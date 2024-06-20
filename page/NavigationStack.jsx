import React from 'react';
import {StyleSheet} from 'react-native';

//page
import QuranSura from './QuranSura';
import NavigationTab from './NavigationTab';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        
        <Stack.Screen name="QuranSura" component={QuranSura} options={{headerShown: false}}/>
        <Stack.Screen name="TabButtomPage" component={NavigationTab} options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
