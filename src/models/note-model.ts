import {getParent, Instance, SnapshotOut, types} from 'mobx-state-tree';

export const NoteModel = types
  .model('Note')
  .props({
    id: types.identifier,
    title: types.maybe(types.string),
    body: types.maybe(types.string),
  })
  .views((self) => ({
    get bodyPreview() {
      return self.body?.length > 300
        ? self.body?.slice(300) + '...'
        : self.body;
    },
  }))
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    setBody(body: string) {
      self.body = body;
    },
    remove() {
      getParent(self).deleteNote(self);
    },
  }));

type NoteType = Instance<typeof NoteModel>;
export interface Note extends NoteType {}
type NoteSnapshotType = SnapshotOut<typeof NoteModel>;
export interface NoteSnapshot extends NoteSnapshotType {}
