import React from 'react';
import Note from '../Components/Note.js';

class NotesContainer extends React.Component {
    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    renderNotes = () => {
        return 
    }

    render() {
        return (
            <ul>
                {this.apiResponse().map( note => <Note key={Note.id} note={note} />)}
            </ul>
                
        )
    }
}

export default NotesContainer;