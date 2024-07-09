import React, { useState, useEffect, ReactNode } from "react";
import { Note } from "../types/types";
import { NoteContext } from "./NoteContext";

function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note: Omit<Note, "id" | "createdAt" | "updatedAt">) => {
    const newNote: Note = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteProvider;
