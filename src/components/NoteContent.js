import React from 'react';

function NoteContent({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h3 className='note-item__title'>{title}</h3>
      <h4 className='note-item__date'>
        {new Date(createdAt).toLocaleString(
          'en-US',
          {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }
        )}
      </h4>
      <p className='note-item__body'>{body}</p>
    </div>
  );
}

export default NoteContent;