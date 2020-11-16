import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import NotesContainer from './Containers/NotesContainer.js';
// import NotesContainerTest from './src/Tests/NotesContainer.test.js';
import Note from './src/Components/Note';

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Hello World" />
        <NotesContainer />
        <Note />
      </div>
    )
  }
}

export default App;
