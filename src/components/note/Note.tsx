import React from 'react';
import {Text, Card, CardItem, Body} from 'native-base';

import Note from '../../models/Note';
import {NoteScreenNavigationProp} from '../../navigation/root-navigator';

interface Props {
  note: Note;
  navigation: NoteScreenNavigationProp;
}

export default ({note}: Props) => (
  <>
    <Card>
      <CardItem header>
        <Text>{note.title}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{note.body}</Text>
        </Body>
      </CardItem>
    </Card>
  </>
);
