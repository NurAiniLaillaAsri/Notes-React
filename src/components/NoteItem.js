import React from 'react';
import NoteContent from './NoteContent';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ id, onDelete, onArchive, title, createdAt, body }) {
  return (
    <div className="note-item">
      <NoteContent  title={title} createdAt={createdAt} body={body} />
      <div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NoteItem;