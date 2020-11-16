import React from 'react'


function Note(props) {
    return <li key={props.note.id}>{props.note.content}</li>
}

export default Note;