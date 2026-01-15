import { Outlet } from "react-router";

import Header from "./Header/Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
