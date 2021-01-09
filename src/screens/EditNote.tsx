import {observer} from 'mobx-react-lite';
import React from 'react';
import Layout from '../components/layout/Layout';
import Note from '../components/note/Note';
import NoteFooter from '../components/note/NoteFooter';

const EditNote = () => {
  return (
    <Layout screenName="Edit Note" footer={<NoteFooter />}>
      <Note />
    </Layout>
  );
};

export default observer(EditNote);
