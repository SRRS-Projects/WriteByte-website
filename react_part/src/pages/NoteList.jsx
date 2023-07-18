import NoteCard from '../components/UI/NoteCard/NoteCard'
import SearchBar from '../components/UI/SearchBar/SearchBar'


function NoteList() {
  return (
    <div className="NoteList">
      

      <div className="main">
        <SearchBar placeholder="Search..." />
        <div className="note_container">
          <NoteCard title='Title' content='Note...' />
          <NoteCard title='Title' content='Note...' />
          <NoteCard title='Title' content='Note...' />
          <NoteCard title='Title' content='Note...' />
          <NoteCard title='Title' content='Note...' />
          <NoteCard title='Add a new note +' />
        </div>
      </div>
    </div>
  );
}

export default NoteList;
