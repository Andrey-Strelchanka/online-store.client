import LoginForm from "../components/users/LoginForm";
import { useContext } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const LoginPage = observer(() => {
  const { store } = useContext(Context);

  return store.isAuth ? (
    <Link to={"/"}>Перейти в каталог</Link>
  ) : (
    <div>
      <LoginForm />{" "}
      <p>
        or register <Link to={"/registration"}>here!</Link>
      </p>
    </div>
  );
});

export default LoginPage;
