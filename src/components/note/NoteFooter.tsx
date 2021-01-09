import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'native-base';
import {useNoteStore} from '../../context/notes-context';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default () => {
  const navigation = useNavigation();
  const noteStore = useNoteStore();

  return (
    <>
      <Button
        danger
        style={styles.button}
        onPress={() => {
          const noteId = noteStore.selectedNote?.id;
          noteStore.deleteNote(noteId);
          navigation.navigate('Home');
        }}>
        <Text>Delete</Text>
      </Button>
      <Button
        style={styles.button}
        onPress={() => {
          noteStore.saveNote(noteStore.selectedNote);
          navigation.navigate('Home');
        }}>
        <Text>Save</Text>
      </Button>
    </>
  );
};
