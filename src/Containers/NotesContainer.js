import React from 'react';
import { render } from 'react-dom';


class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, 
        { id: 2, content: "Second Note" },
        { id: 3, content: "Third Note" }, 
        { id: 4, content: "Fourth Note" }]
    }
     

    renderNotes = () => {
        this.apiResponse.map( function(note) {
            return render(note.content)
        })
    }
    


    render(note) {
        return (
            <ul>
               <li>{note}</li>
            </ul>
        )
    }

}



export default NotesContainer;

