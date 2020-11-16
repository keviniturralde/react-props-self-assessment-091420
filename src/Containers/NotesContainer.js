import React from 'react';
class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }
 
    // still need a little fuzzy on some of the things, did not have the time over the weekend to cover as much as I wanted but I'll catch up.
    render() {
        return (
            <ul>
                {}
            </ul>
        )
    }

}

export default NotesContainer;

