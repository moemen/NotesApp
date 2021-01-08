import React from 'react';
import 'react-native-get-random-values';
import CreateNoteButton from '../components/create-note-button/CreateNoteButton';

import Layout from '../components/layout/Layout';
import NotesList from '../components/notes-list/NotesList';

export default () => (
  <Layout screenName="Home" footer={<CreateNoteButton />}>
    <NotesList />
  </Layout>
);
