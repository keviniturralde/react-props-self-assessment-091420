import React from 'react';
import Note from '../Components/Note.js'
class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    
    render() {
        const notes = this.apiResponse().map(function(note){return <Note note={note}/>})
        console.log(notes)
        // console.log(notes)
        return (
            <ul>
                {notes}
            </ul>
        )
    }

}

export default NotesContainer;

