import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
