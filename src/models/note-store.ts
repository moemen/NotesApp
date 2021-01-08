import {Instance, SnapshotOut, types, destroy} from 'mobx-state-tree';
import {v4 as uuidv4} from 'uuid';
import {NoteModel, Note} from './note-model';

export const NoteStoreModel = types
  .model('NoteStore')
  .props({
    notes: types.optional(types.array(NoteModel), []),
    selectedNote: types.maybeNull(types.reference(NoteModel)),
  })
  .actions((self) => ({
    newNote: () => {
      const blankNote = NoteModel.create({id: uuidv4()});
      self.notes.push(blankNote);
      self.selectedNote = blankNote;
    },
    deleteNote: (note: Note) => {
      destroy(note);
    },
    selectNote: (note: Note) => {
      self.selectedNote = note;
    },
  }));

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.
 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type NoteStoreType = Instance<typeof NoteStoreModel>;
export interface NoteStore extends NoteStoreType {}
type NoteStoreSnapshotType = SnapshotOut<typeof NoteStoreModel>;
export interface NoteStoreSnapshot extends NoteStoreSnapshotType {}
