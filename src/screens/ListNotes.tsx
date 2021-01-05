import React from 'react';
import Layout from '../components/layout/Layout';
import NotesList from '../components/notes-list/NotesList';
import Note from '../models/Note';

const notes: Array<Note> = [
  new Note(
    'My first Note',
    'I have an important list of notes to document here',
  ),
  new Note(
    'My second Note',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
`,
  ),
];

export default () => (
  <Layout>
    <NotesList notes={notes} />
  </Layout>
);
