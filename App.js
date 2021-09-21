import React, {Component} from 'react';
import RegisterScene from './components/registerScene';
import HomeScene from './components/homeScene';
import LoginScene from './components/loginScene';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
const Stack = createNativeStackNavigator()



export default class App extends Component {
  render() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
            name ='Login'
            component={LoginScene}
            options={{ title: 'Inicio de sesión ' }}
            >
            </Stack.Screen>
            <Stack.Screen
            name ='registerScene'
            component={RegisterScene}
            >
            </Stack.Screen>
            <Stack.Screen
            name ='homeScene'
            component={HomeScene}
            >
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>

      );


  }
}