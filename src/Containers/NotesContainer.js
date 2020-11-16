import React from 'react';
class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    noteMap = () => {this.apiResponse.map(note => <li key={note.id} note={note.content}></li>)}

    render() {
        return (
            <ul>
                {this.noteMap()}
            </ul>
        )
    }

}

export default NotesContainer;

