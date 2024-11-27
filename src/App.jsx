import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
