function JobOfferList({jobOffers}) {
    if (jobOffers.length === 0) {
        return (
            <div className="empty-state">
                <h3>No job offers yet</h3>
                <p>Job offers you add will show up here.</p>
            </div>
        );
    }

    return (
        <ul className="card-list">
            {jobOffers.map((jobOffer) => (
                <li key={jobOffer.id} className="company-card">
                    <div className="avatar">{jobOffer.name.charAt(0).toUpperCase()}</div>
                    <div>
                        <h3>{jobOffer.title}</h3>
                        <p>{jobOffer.description || "Description not specified"}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default JobOfferList;

