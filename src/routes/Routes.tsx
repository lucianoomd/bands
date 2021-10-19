import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BandDetails from '../screens/BandDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from '../store/store';
import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator();

export const SCREENS = {
  HOME: 'Home',
  BAND_DETAILS: 'Band Details'
}

const Routes = (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#444',
            borderBottomWidth: 1,
            borderBottomColor: '#FFF'
          },
          headerTitleStyle: {
            color: '#fff',
          },
          
        }}
      >
        <Stack.Screen name={SCREENS.HOME} component={Home} />
        <Stack.Screen name={SCREENS.BAND_DETAILS} component={BandDetails} options={({ route }) => ({ title: route.params.title })} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default Routes;