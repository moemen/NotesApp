import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import ListNotes from './screens/ListNotes';
import {Stack} from './navigation/root-navigator';
import EditNote from './screens/EditNote';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={ListNotes} />
        <Stack.Screen name="Note" component={EditNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
