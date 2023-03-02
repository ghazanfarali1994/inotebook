import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "63fb955777819daa1d0dd28b",
          "user": "63f7b50f1a775142311a3983",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-26T17:22:31.567Z",
          "__v": 0
        },
        {
          "_id": "63fe38d095ae963c88e4fe66",
          "user": "63f7b50f1a775142311a3983",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-28T17:24:32.490Z",
          "__v": 0
        },
        {
          "_id": "63fe38d395ae963c88e4fe68",
          "user": "63f7b50f1a775142311a3983",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-28T17:24:35.093Z",
          "__v": 0
        },
        {
          "_id": "63fe38d495ae963c88e4fe6a",
          "user": "63f7b50f1a775142311a3983",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-28T17:24:36.369Z",
          "__v": 0
        },
        {
          "_id": "63fe38d595ae963c88e4fe6c",
          "user": "63f7b50f1a775142311a3983",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-28T17:24:37.318Z",
          "__v": 0
        },
        {
          "_id": "63fe38d595ae963c88e4fe6e",
          "user": "63f7b50f1a775142311a3983",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-28T17:24:37.651Z",
          "__v": 0
        },
        {
          "_id": "63fe38d595ae963c88e4fe70",
          "user": "63f7b50f1a775142311a3983",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2023-02-28T17:24:37.888Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

      // Add a Note
      const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "63fe38d595ae963c88e4fe70",
          "user": "63f7b50f1a775142311a3983",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-02-28T17:24:37.888Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const deleteNote = () => {
        
      }

      // Edit a Note 
      const editNote = () => {
        
      }

  
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}} >
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;