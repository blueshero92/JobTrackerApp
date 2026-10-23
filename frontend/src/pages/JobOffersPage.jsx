import {useEffect, useState} from 'react'
import {fetchJobOffers} from '../services/api'
import JobOfferList from '../components/JobOfferList'

function JobOffersPage() {
    const [jobOffers, setJobOffers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchJobOffers()
            .then(setJobOffers)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    return (
        <section className="page">
            <div className="page-header">
                <h2>Job Offers</h2>
                {!loading && !error && (
                    <span className="count-pill">{jobOffers.length}</span>
                )}
            </div>
            {loading && <p className="muted">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <JobOfferList jobOffers={jobOffers} />
            )}
        </section>
    );
}
export default JobOffersPage;