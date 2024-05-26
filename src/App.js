import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Function to fetch notes from different backend microservices
  const fetchNotes = async () => {
    try {
      // API calls to different backend microservices
      const pythonResponse = await axios.get('http://127.0.0.1:5000/notes');
      const nodejsResponse = await axios.get('http://localhost:3001/notes');
      // const javaResponse = await axios.get('http://java-backend.com/notes');

      // Combining data from different backends
      const combinedNotes = [
        ...pythonResponse.data.notes,
        ...nodejsResponse.data.notes,
       // ...javaResponse.data.notes,
      ];
      setNotes(combinedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to handle adding a new note
  const addNoteWithPython = async () => {
    try {
      // Assuming Python backend handles note creation
      await axios.post('http://127.0.0.1:5000/notes', { content: newNote });
      fetchNotes(); // Fetch updated notes after adding a new one
      setNewNote('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };  
  const addNoteWithNode = async () => {
    try {
      // Assuming Python backend handles note creation
      await axios.post('http://localhost:3001/notes', { content: newNote });
      fetchNotes(); // Fetch updated notes after adding a new one
      setNewNote('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div>
      <h1>Notes App</h1>
      <div>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter your note"
        />
        <button onClick={addNoteWithNode}>Add Note with nodejs</button>
        <button onClick={addNoteWithPython}>Add Note with python</button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
