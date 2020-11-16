import React from 'react';

 const apiResponse = () => {
    return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
}

// console.log (apiResponse())

let notes = apiResponse().map(x => <li>{x.content}</li> )

console.log(notes)
class NotesContainer extends React.Component {

    render() {
        return (
            <ul>
               {notes}
            </ul>
        )
    }

}

export default NotesContainer;

