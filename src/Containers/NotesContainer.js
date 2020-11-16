import React from 'react';
class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    render() {
        return (
            <ul>
                { this.apiResponse().map((r) => {
                    return <li key={r.id}>{r.content}</li>
                })}
            </ul>
        )
    }

}

export default NotesContainer;

