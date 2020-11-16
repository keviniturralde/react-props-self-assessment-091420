import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header.js'
import NotesContainer from "./Containers/NotesContainer.js"

class App extends Component {
  render() {
    return (
      <>
        <Header text="こんいちはせ世界" />
        <NotesContainer />
      </>
    )
  }
}

export default App;
