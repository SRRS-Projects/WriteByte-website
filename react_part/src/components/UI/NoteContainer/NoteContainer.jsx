import NoteCard from "../NoteCard/NoteCard";

function NoteContainer({notes}) {
  return (
    <div className="note_container">
      <NoteCard title="Add a new note +" href={`/notelist/new`} />
      {notes.map((note) => (
        <NoteCard
          href={`/notelist/${note.id}`}
          key={note.id}
          title={note.title}
          content={note.content}
        />
      ))}
    </div>
  );
}

export default NoteContainer;
