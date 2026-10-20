import { useEffect, useState } from "react";
import { fetchCompanies } from "../services/api";
import CompanyList from "../components/CompanyList";

function CompaniesPage() {
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
    <section className="page">
      <div className="page-header">
        <h2>Companies</h2>
        {!loading && !error && (
          <span className="count-pill">{companies.length}</span>
        )}
      </div>
      {loading && <p className="muted">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <CompanyList companies={companies} />}
    </section>
  );
}

export default CompaniesPage;
