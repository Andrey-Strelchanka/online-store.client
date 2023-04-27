import { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import AuthService from "../../services/authService";

const Header = observer(() => {
  const { store } = useContext(Context);

  return (
    <header className="header">
      <Link to={"/"} className="storename">
        online-store
      </Link>
      {store.isAuth ? (
        <div style={{ display: "flex" }}>
          <p>{store.user.email}</p>
          <button
            style={{ margin: "0 0 0 10px" }}
            onClick={() => AuthService.logout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to={"/login"}>Войти в аккаунт</Link>
      )}
    </header>
  );
});

export default Header;
