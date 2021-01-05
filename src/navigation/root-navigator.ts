import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import Note from '../models/Note';

type RootStackParamList = {
  Note: {note: Note};
  Home: undefined;
};

export const Stack = createStackNavigator<RootStackParamList>();

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type NoteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Note'
>;

export type NoteScreenRouteProp = RouteProp<RootStackParamList, 'Note'>;
