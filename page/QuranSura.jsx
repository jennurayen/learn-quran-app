import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SuraDetails from './SuraDetails';
import ListOfSura from '../data/ListOfSura';

const Tab = createMaterialTopTabNavigator();

let arr = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 3, name: 'three'},
  {id: 4, name: 'four'},
  {id: 5, name: 'five'},
  {id: 6, name:'six'},
];

class MyClass {
  constructor(arr) {
    this.arr = arr;
  }
  // Create functions dynamically based on 'name' property
  createFunctions() {
    this.arr.forEach(item => {
      // Define function with name from 'name' property
      this[item.name] = () => {
        console.log(item.id);
      };
    });
  }
}
const myClassInstance = new MyClass(arr);
myClassInstance.createFunctions();

// Now you can use the methods defined dynamically
myClassInstance.one();   // Output: 1
// myClassInstance.two();   // Output: 2
// myClassInstance.three(); // Output: 3



const QuranSura = () => {
  return (
   
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarScrollEnabled: true,
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: 'tomato' },
    }}
    >
      {ListOfSura.map((obj)=> (
        <Tab.Screen key={obj.id} name={`${obj.id}`} component={SuraDetails} options={{title: obj.translation}}/>
      ))}      
    </Tab.Navigator>
     
  )
}

export default QuranSura

const styles = StyleSheet.create({})