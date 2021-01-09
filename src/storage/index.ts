import AsyncStorage from '@react-native-async-storage/async-storage';
import {onSnapshot} from 'mobx-state-tree';
import {NoteStore, NoteStoreModel} from '../models/note-store';

const STORAGE_KEY = 'notes_app';

const welcome_note = {
  notes: [],
};

export const setupStore = async () => {
  let noteStore: NoteStore;

  try {
    // load data from storage
    const data = (await load()) || welcome_note;
    noteStore = NoteStoreModel.create(data);
  } catch (e) {
    // if there's any problems loading, then let's at least fallback to an empty state
    // instead of crashing.
    noteStore = NoteStoreModel.create(welcome_note);
  }

  onSnapshot(noteStore, (snapshot: any) => save(STORAGE_KEY, snapshot));

  return noteStore;
};

const load = async () => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    return JSON.parse(storedData);
  } catch {
    return null;
  }
};

const save = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};
