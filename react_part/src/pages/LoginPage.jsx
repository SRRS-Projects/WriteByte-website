import MyButton from "../components/UI/MyButton/MyButton";
import SearchBar from "../components/UI/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const NavHandler = () => {
    navigate("/notelist");
  };

  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <form>
          <SearchBar placeholder="Username" />
          <SearchBar placeholder="Password" type="password" />
          <MyButton onClick={NavHandler}>Sign In</MyButton>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
