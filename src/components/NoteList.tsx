import React, { useContext, useState } from 'react';
import NoteForm from './NoteForm';
import { NoteContext } from '../components/NoteContext';
import { Note } from '../types/types'; // Adjust path if necessary

const NoteList: React.FC = () => {
  const { notes, deleteNote } = useContext(NoteContext)!;
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [search, setSearch] = useState('');

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search notes"
      />
      <button onClick={() => setEditingNote(null)}>Add Note</button>
      
      {/* Conditional rendering based on editingNote state */}
      {editingNote !== null && <NoteForm note={editingNote} onClose={() => setEditingNote(null)} />}
      {editingNote === null && <NoteForm onClose={() => setEditingNote(null)} />}
      
      <ul>
        {filteredNotes.map(note => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => setEditingNote(note)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
