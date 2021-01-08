import React from 'react';

import {Text, Card, CardItem, Body} from 'native-base';
import {Pressable} from 'react-native';
import {Note} from '../../models/note-model';
import {useNoteStore} from '../../context/notes-context';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';

export default observer(() => {
  const {notes, selectNote} = useNoteStore();
  const navigation = useNavigation();
  return (
    <>
      {notes.map((note: Note) => (
        <Pressable
          onPress={() => {
            selectNote(note);
            return navigation.navigate('Note');
          }}
          key={note.id}>
          <Card>
            <CardItem header>
              <Text>{note.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{note.bodyPreview}</Text>
              </Body>
            </CardItem>
          </Card>
        </Pressable>
      ))}
    </>
  );
});
