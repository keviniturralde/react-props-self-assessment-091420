import React from 'react'


function Note(props) {
    console.log(props)
    return <li>{props.content}</li>
}

export default Note;