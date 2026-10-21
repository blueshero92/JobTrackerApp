import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompaniesPage from "./pages/CompaniesPage";
import "./App.css";

function App() {

  return (
      <BrowserRouter>
          <div className="app">
              {}
              <Navbar />

              <main className="content">
                  <Routes>
                      {}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/companies" element={<CompaniesPage />} />
                  </Routes>
              </main>

              <footer className="footer">
                  JobTracker &middot; Built with React &amp; Spring Boot
              </footer>
          </div>
      </BrowserRouter>
  );
}

export default App;
