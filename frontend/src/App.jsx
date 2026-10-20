import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompaniesPage from "./pages/CompaniesPage";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navbar page={page} onNavigate={setPage} />
      <main className="content">
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "companies" && <CompaniesPage />}
      </main>
      <footer className="footer">JobTracker &middot; Built with React &amp; Spring Boot</footer>
    </div>
  );
}

export default App;
