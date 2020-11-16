import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from './Containers/NotesContainer'

class App extends Component {
  render() {
    return (
      <>
        <Header text="Hello World!" />
        <NotesContainer />
      </>
    )
  }
}

export default App;

// I'm having difficulty understanding when to use '../' vs. './'
// I'm still having difficulty understanding when to use props and when to use this.props
