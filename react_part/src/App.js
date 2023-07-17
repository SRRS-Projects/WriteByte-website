import React from "react";
import NoteCard from "./components/UI/NoteCard/NoteCard";
import SideBar from "./components/UI/SideBar/SideBar";
import './styles/App.css'
import SearchBar from "./components/UI/SearchBar/SearchBar";

import MySideBar from "./components/UI/SideBar/SideBar";

function App() {

  

  return (
    <div className="App">
        <MySideBar/>
      
      <div className="main">
        <SearchBar placeholder="Search..."/>
        <div className="note_container">
        <NoteCard>First Note</NoteCard>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        </div>
        
      
    </div>
    </div>
  );
}

export default App;
