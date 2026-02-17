import { Outlet } from "react-router";

import SiteNav from "./SiteNav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="main-container">
        <SiteNav />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
