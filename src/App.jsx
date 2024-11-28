import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
