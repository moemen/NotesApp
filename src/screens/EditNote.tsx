import React from 'react';
import Layout from '../components/layout/Layout';
import Note from '../components/note/Note';
import NoteModel from '../models/Note';
import {
  NoteScreenNavigationProp,
  NoteScreenRouteProp,
} from '../navigation/root-navigator';

type Props = {
  navigation: NoteScreenNavigationProp;
  route: NoteScreenRouteProp;
  note: NoteModel;
};

export default (props: Props) => {
  return (
    <Layout screenName="Edit Note">
      <Note note={props.route.params.note} navigation={props.navigation} />
    </Layout>
  );
};
