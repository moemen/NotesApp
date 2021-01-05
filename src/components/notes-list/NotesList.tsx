import React from 'react';

import {Text, Card, CardItem, Body} from 'native-base';
import Note from '../../models/Note';

interface Props {
  notes: Array<Note>;
}

export default ({notes}: Props) => (
  <>
    {notes.map((note: Note) => (
      <Card key={note.id}>
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
    ))}
  </>
);
