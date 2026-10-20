function CompanyList({ companies }) {
  if (companies.length === 0) {
    return (
      <div className="empty-state">
        <h3>No companies yet</h3>
        <p>Companies you add will show up here.</p>
      </div>
    );
  }

  return (
    <ul className="card-list">
      {companies.map((company) => (
        <li key={company.id} className="company-card">
          <div className="avatar">{company.name.charAt(0).toUpperCase()}</div>
          <div>
            <h3>{company.name}</h3>
            <p>{company.location || "Location not specified"}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CompanyList;
