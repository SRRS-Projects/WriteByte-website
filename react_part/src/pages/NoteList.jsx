
import NoteCard from "../components/UI/NoteCard/NoteCard";
import SearchBar from "../components/UI/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import NoteService from "../API/NoteService"

function NoteList() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await NoteService.getNotes(0)
      setNotes([...notes, ...res.notes])
    }
    fetchData();
  }, [])

  return (
    <div className="NoteList">
      <div className="main">
        <SearchBar placeholder="Search..." />
        <div className="note_container">

          {notes.map((note) => (
            <NoteCard id={note.id} key={note.id} title={note.title} content={note.content}/>
          ))}

          <NoteCard title="Add a new note +" link={"/new"} />
        </div>
      </div>
    </div>
  );
}

export default NoteList;
