import React from 'react';

import {Text, Card, CardItem, Body} from 'native-base';
import Note from '../../models/Note';
import {Pressable} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigation/root-navigator';

interface Props {
  notes: Array<Note>;
  navigation: HomeScreenNavigationProp;
}

export default ({notes, navigation}: Props) => (
  <>
    {notes.map((note: Note) => (
      <Pressable
        onPress={() => navigation.navigate('Note', {note})}
        key={note.id}>
        <Card>
          <CardItem header>
            <Text>{note.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {note.body.length > 300
                  ? note.body.substring(0, 300) + '...'
                  : note.body}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Pressable>
    ))}
  </>
);
