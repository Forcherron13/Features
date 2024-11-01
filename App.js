import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';
import Screen5 from './src/screens/Screen5';
import Screen6 from './src/screens/Screen6';
import Screen7 from './src/screens/Screen7';
import Screen8 from './src/screens/Screen8';
import Screen9 from './src/screens/Screen9';
import Screen10 from './src/screens/Screen10';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
        <Stack.Screen name="Screen6" component={Screen6} />
        <Stack.Screen name="Screen7" component={Screen7} />
        <Stack.Screen name="Screen8" component={Screen8} />
        <Stack.Screen name="Screen9" component={Screen9} />
        <Stack.Screen name="Screen10" component={Screen10} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
