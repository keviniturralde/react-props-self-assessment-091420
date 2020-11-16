import React from 'react';

function NotesContainer() {
    const apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    console.log(apiResponse())
    // const notes = apiResponse().map(function (note) {return <Note test/>})



    return (
            <ul>
                test
                {}
            </ul>
        )
}    

// class NotesContainer extends React.Component {

//     apiResponse = () => {
//         return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
//     }

//     render() {
//         return (
//             <ul>
//                 {}
//             </ul>
//         )
//     }

// }

export default NotesContainer;

