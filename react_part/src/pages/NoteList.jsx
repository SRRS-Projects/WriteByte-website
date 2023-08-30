import SearchBar from "../components/UI/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import NoteService from "../API/NoteService";
import NoteContainer from "../components/UI/NoteContainer/NoteContainer";
import useFilterNotes from "../hooks/useFilterNotes";

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('');
  const SearchedPosts = useFilterNotes(notes, filter);

  useEffect(() => {
    async function fetchData() {
      const res = await NoteService.getNotes(0);
      setNotes([...notes, ...res.notes]);
    }
    fetchData();
  }, []);

  return (
    <div className="NoteList">
      <div className="main">

        <SearchBar
          placeholder="Search..."
          value={filter}
          onChange={(e) => {setFilter(e.target.value)}}
        />
        <NoteContainer notes={SearchedPosts}/>
        
      </div>
    </div>
  );
}

export default NoteList;
