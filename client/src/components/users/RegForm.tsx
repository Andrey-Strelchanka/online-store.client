import { FC, useContext, useState } from "react";
import { Context } from "../../main";

const RegForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="name"
      />
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
      <button onClick={() => store.registration(name, email, password)}>
        Registration
      </button>
    </div>
  );
};

export default RegForm;
