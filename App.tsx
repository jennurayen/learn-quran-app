import React from 'react';
import {StyleSheet} from 'react-native';
import NavigationStack from './page/NavigationStack';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from './page/Feed';
import Messages from './page/Messages';
import Profile from './page/Profile';
import Settings from './page/Settings';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()





// function Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//     </Tab.Navigator>
//   );
// }

function App() {
  return (
    <NavigationStack/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen name="Profile" component={Profile} />
    //     <Stack.Screen name="Settings" component={Settings} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
