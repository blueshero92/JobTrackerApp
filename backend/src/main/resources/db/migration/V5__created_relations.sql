ALTER TABLE application_users
    ADD COLUMN company_id UUID;

ALTER TABLE application_users
    ADD CONSTRAINT fk_application_users_company
        FOREIGN KEY (company_id)
            REFERENCES companies(id);

CREATE INDEX idx_application_users_company_id
    ON application_users(company_id);

ALTER TABLE job_applications
    DROP COLUMN company_id;

ALTER TABLE job_applications
    ADD COLUMN job_offer_id UUID;

ALTER TABLE job_applications
    ADD CONSTRAINT fk_job_applications_job_offer
        FOREIGN KEY (job_offer_id)
            REFERENCES job_offers(id);

CREATE INDEX idx_job_applications_job_offer_id
    ON job_applications(job_offer_id);
