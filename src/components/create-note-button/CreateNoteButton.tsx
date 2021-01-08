import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useNoteStore} from '../../context/notes-context';

const styles = StyleSheet.create({
  createButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default () => {
  const {newNote} = useNoteStore();
  const navigation = useNavigation();
  return (
    <Button
      style={styles.createButton}
      onPress={() => {
        newNote();
        return navigation.navigate('Note');
      }}>
      <Text>Create Note</Text>
    </Button>
  );
};
