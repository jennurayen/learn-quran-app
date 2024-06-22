
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SuraDetails from './SuraDetails';
import ListOfSura from '../data/ListOfSura';


const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  
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

export default TopTab