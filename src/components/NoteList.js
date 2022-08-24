import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {
        notes.map((note) => {
          if (note.archived === false) {
            return (
              <NoteItem key={note.id}
                {...note}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            )
          }
        })
      }
    </div>
  );
}

export default NoteList;