import MyButton from "../components/UI/MyButton/MyButton";
import NoteCard from "../components/UI/NoteCard/NoteCard";
import SearchBar from "../components/UI/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const notePage = (event) => {
    event.preventDefault();
    navigate('/notelist');
  }

  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <form>
          <SearchBar placeholder="Username" />
          <SearchBar placeholder="Password" type="password" />
          <MyButton onClick={notePage}>Sign In</MyButton>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
