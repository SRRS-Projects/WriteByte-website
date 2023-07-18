import InputTitle from "../components/UI/NoteInput/InputTitle";
import InputContent from "../components/UI/NoteInput/InputContent";

function NotePage() {
  return (
    <div className="NotePage">
      <InputTitle placeholder='Title' autofocus/>
      <InputContent placeholder='Note'/>
    </div>
  );
}

export default NotePage;
