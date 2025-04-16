import { Outlet } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Footer from "../navigation/Footer";

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />   
      </footer>
    </>
  );
}