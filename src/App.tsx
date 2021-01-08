import React, {useEffect, useState} from 'react';
import {Spinner} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import ListNotes from './screens/ListNotes';
import {Stack} from './navigation/root-navigator';
import EditNote from './screens/EditNote';
import {NotesContextProvider} from './context/notes-context';
import {setupStore} from './storage';
import {NoteStore} from './models/note-store';

const App = () => {
  const [noteStore, setNoteStore] = useState<NoteStore>();
  useEffect(() => {
    (() => setupStore().then(setNoteStore))();
  }, []);

  if (noteStore) {
    return (
      <NavigationContainer>
        <NotesContextProvider value={noteStore}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={ListNotes} />
            <Stack.Screen name="Note" component={EditNote} />
          </Stack.Navigator>
        </NotesContextProvider>
      </NavigationContainer>
    );
  } else {
    return <Spinner />;
  }
};

export default App;
