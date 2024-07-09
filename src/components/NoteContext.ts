import React, {createContext} from 'react'
import { Note } from '../types/types'

interface NoteContextProps {
    notes: Note[];
    addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void
    updateNote: (note: Note) => void
    deleteNote: (id: string) => void
}

export const NoteContext = createContext<NoteContextProps | undefined>(undefined)