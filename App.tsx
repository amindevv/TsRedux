import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Users, UserDetail } from './src/containers'
import { CONTAINERS } from './src/const/Containers'

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={CONTAINERS.USERS}>
        <Stack.Screen component={Users} name={CONTAINERS.USERS} />
        <Stack.Screen component={UserDetail} name={CONTAINERS.USER_DETAIL} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
