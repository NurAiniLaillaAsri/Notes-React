import React from 'react';
import { getInitialData } from '../utils/index';
import '../styles/style.css'
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }
  
  onArchiveHandler(id) {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='note-app__header'>
          <h1>Notes</h1>
        </div>
        <div className='note-app__body h2 note-input'>
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
        </div>
        <div className='note-app__body h2'>
          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archived={false} />
          {this.state.notes.filter(note => note.archived !== true).length === 0 && <p className='note-app__empty'>Tidak ada catatan</p>}
          <h2>Arsip</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archived={true} />
          {this.state.notes.filter(note => note.archived === true).length === 0 && <p className='note-app__empty'>Tidak ada catatan</p>}
        </div>
      </div>
    )
  }
}

export default NoteApp;