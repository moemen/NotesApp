import {observer} from 'mobx-react-lite';
import React from 'react';
import Layout from '../components/layout/Layout';
import Note from '../components/note/Note';

const EditNote = () => {
  return (
    <Layout screenName="Edit Note">
      <Note />
    </Layout>
  );
};

export default observer(EditNote);
