import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useNoteStore} from '../../context/notes-context';
import {Note} from '../../models/note-model';

const styles = StyleSheet.create({
  createButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default () => {
  const {newNote, selectNote} = useNoteStore();
  const navigation = useNavigation();
  return (
    <Button
      style={styles.createButton}
      onPress={() => {
        const blankNote: Note = newNote();
        selectNote(blankNote);
        return navigation.navigate('Note');
      }}>
      <Text>Create Note</Text>
    </Button>
  );
};
