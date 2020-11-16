import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NoteContainer from './Containers/NotesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header text='Hello World' />
        <NoteContainer />
      </div>
    )
  }
}

export default App;
