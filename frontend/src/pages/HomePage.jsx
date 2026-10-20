const features = [
  {
    title: "Track applications",
    text: "Log every role you apply to, with its link, status and date, so nothing slips through.",
    icon: (
      <path d="M9 5h6M9 9h6M9 13h4M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    ),
  },
  {
    title: "Prepare interviews",
    text: "Keep every round, date, result and note in one timeline for each application.",
    icon: (
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    ),
  },
  {
    title: "Explore companies",
    text: "Browse employers and their open positions, and apply with a single click.",
    icon: (
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01" />
    ),
  },
];

const stages = ["Applied", "Interview", "Offer"];

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <span className="badge">Your job search, organized</span>
        <h1 className="hero-title">
          Land your next role,
          <br />
          <span className="gradient-text">one step at a time.</span>
        </h1>
        <p className="hero-subtitle">
          JobTracker keeps your applications, interviews and offers in one
          place, so you always know what comes next.
        </p>
        <div className="button-row">
          <button className="btn btn-primary" onClick={() => onNavigate("companies")}>
            Browse companies &rarr;
          </button>
          <button className="btn btn-ghost" disabled title="Coming soon">
            My applications
          </button>
        </div>

        <div className="pipeline" aria-label="Application pipeline">
          {stages.map((stage, i) => (
            <div className="pipeline-item" key={stage}>
              <span className={`pipeline-dot step-${i}`} />
              <span>{stage}</span>
              {i < stages.length - 1 && <span className="pipeline-line" />}
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {feature.icon}
              </svg>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default HomePage;
