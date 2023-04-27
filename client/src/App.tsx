import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { useContext, useEffect } from "react";
import { Context } from "./main.js";
import { observer } from "mobx-react-lite";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DevicePage from "./pages/DevicePage";

const App = observer(() => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<DevicePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<SignUpPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
});

export default App;
