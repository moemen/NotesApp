import {createContext, useContext} from 'react';
import {NoteStore} from '../models/note-store';

export const NotesContext = createContext<NoteStore>({} as NoteStore);

export const NotesContextProvider = NotesContext.Provider;

export const useNoteStore = () => useContext(NotesContext);
