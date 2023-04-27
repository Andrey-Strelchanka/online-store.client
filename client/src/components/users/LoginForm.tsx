/* eslint-disable react-refresh/only-export-components */
import { FC, useContext, useState } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

const LoginForm: FC = observer(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="password"
      />
      <button onClick={() => store.login(email, password)}>Login</button>
      {/* <button onClick={() => store.registration(email, password)}>
        Registration
      </button> */}
    </div>
  );
});

export default LoginForm;
