import React, {useState, useContext, useEffect} from 'react'
import {NoteContext} from '../components/NoteContext'
import {Note} from '../types/types'

interface NoteFormProps {
    note?: Note
    onClose: () => void
}

const NoteForm: React.FC <NoteFormProps> = ({note, onClose}) => {
    const {addNote, updateNote} = useContext(NoteContext)!
    const [title, setTitle] = useState(note?.title || '')
    const [content, setContent] = useState(note?.content || '')

    useEffect(() => {
        setTitle(note?.title || '')
        setContent(note?.content || '')
    }, [note])

    const handleSubmit = () => {
        if (note){
            updateNote({...note, title, content, updatedAt: new Date()})
        }else {
            addNote({
                title, content
            })
        }
        onClose()
    }


  return (
    <div>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        />
        <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        /> 
        <button onClick={handleSubmit}>{note ? 'Update' : 'Add'} Note</button>
    </div>
  )
}

export default NoteForm