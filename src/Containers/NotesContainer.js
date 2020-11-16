import React from 'react';
import Note from '../Components/Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    noteArray = () => {
        return this.apiResponse().map(noteObj => <Note {...noteObj} />)
    }

    render() {
        // console.log(this.apiResponse())
        return (
            
            <ul>
               {this.noteArray()}
            </ul>
        )
    }

}

export default NotesContainer;

