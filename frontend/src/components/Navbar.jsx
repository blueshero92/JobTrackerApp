import {Link, useLocation, useNavigate} from 'react-router-dom';

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { id: "home", path: "/", label: "Home" },
    { id: "companies", path: "/companies", label: "Companies" },
    {id: "jobOffers", path: "/jobOffers", label: "Job Offers" },
  ];

  return (
    <header className="navbar">
        <button className="brand" onClick={() => navigate("/")}>
            <span className="brand-mark">J</span>
            <span className="brand-name">JobTracker</span>
        </button>
      <nav className="nav-links">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
