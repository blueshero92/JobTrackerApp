function Navbar({ page, onNavigate }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "companies", label: "Companies" },
  ];

  return (
    <header className="navbar">
      <button className="brand" onClick={() => onNavigate("home")}>
        <span className="brand-mark">J</span>
        <span className="brand-name">JobTracker</span>
      </button>
      <nav className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            className={`nav-link ${page === link.id ? "active" : ""}`}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
