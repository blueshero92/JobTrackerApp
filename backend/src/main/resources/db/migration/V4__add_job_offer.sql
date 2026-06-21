CREATE TABLE job_offers (
                           id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

                           title VARCHAR(255) NOT NULL,
                           description TEXT NOT NULL,

                           company_id UUID NOT NULL,

                           is_active BOOLEAN NOT NULL DEFAULT TRUE,

                           CONSTRAINT fk_job_offer_company
                               FOREIGN KEY (company_id)
                                   REFERENCES companies (id)
                                   ON DELETE CASCADE
);