import { useEffect, useState } from "react";
import { fetchCompanies } from "./services/api";
import CompanyList from "./components/CompanyList";

function App() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCompanies()
      .then(setCompanies)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>JobTracker App</h1>
      <h2>Companies</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <CompanyList companies={companies} />}
    </div>
  );
}

export default App;
