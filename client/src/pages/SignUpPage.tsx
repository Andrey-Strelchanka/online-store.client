import { useContext } from "react";
import RegForm from "../components/users/RegForm";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const SignUpPage = observer(() => {
  const { store } = useContext(Context);

  return store.isAuth ? (
    <div>
      <p>Activate your account on your {store.user.email}</p>
      <Link to={"/"}>Перейти в каталог</Link>
    </div>
  ) : (
    <RegForm />
  );
});

export default SignUpPage;
