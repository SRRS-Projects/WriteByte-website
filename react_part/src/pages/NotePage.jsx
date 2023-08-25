import InputTitle from "../components/UI/NoteInput/InputTitle";
import InputContent from "../components/UI/NoteInput/InputContent";
import MyButton from "../components/UI/MyButton/MyButton";
import { useNavigate, useParams } from "react-router-dom";
import NoteService from "../API/NoteService";
import { useState, useEffect } from "react";

function NotePage() {
  const [note, setNote] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      return await NoteService.getNotes(params.id);
    }
    fetchData().then((value) => {
      setNote({ title: value.notes[0].title, content: value.notes[0].content });
    });
  }, []);

  const NavHandler = () => {
    NoteService.saveNote(params.id, {
      title: note.title,
      content: note.content,
    });
    navigate("/notelist");
  };

  return (
    <div className="NotePage">
      <InputTitle 
        placeholder="Title" autoFocus 
        value={note.title}
        onChange={e => setNote({...note, title: e.target.value})} 
      />

      <InputContent 
        placeholder="Note" 
        value={note.content} 
        onChange={e => setNote({...note, content: e.target.value})}
      />

      <MyButton onClick={NavHandler}>Back</MyButton>
    </div>
  );
}

export default NotePage;
