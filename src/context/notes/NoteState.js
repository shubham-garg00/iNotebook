import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "639cb2286ba5c2d93bc648bf",
            "user": "638611459ca389cd42a2f2f5",
            "title": "My Title updated",
            "description": "Please wake up early updated",
            "tag": "personal",
            "date": "2022-12-16T18:00:08.469Z",
            "__v": 0
        },
        {
            "_id": "639cb3556ba5c2d93bc648cf",
            "user": "638611459ca389cd42a2f2f5",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-12-16T18:05:09.011Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)


    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
            "_id": "61322f119553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API Call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    // Edit a Note
    const editNote = (id, title, description, tag) => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;