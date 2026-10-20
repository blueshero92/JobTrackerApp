function CompanyList({ companies }) {
  if (companies.length === 0) {
    return <p>No companies yet.</p>;
  }

  return (
    <ul>
      {companies.map((company) => (
        <li key={company.id}>
          <strong>{company.name}</strong>
          {company.location && ` - ${company.location}`}
        </li>
      ))}
    </ul>
  );
}

export default CompanyList;
