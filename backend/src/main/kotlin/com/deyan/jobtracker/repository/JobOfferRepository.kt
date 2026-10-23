package com.deyan.jobtracker.repository

import com.deyan.jobtracker.model.entity.JobOffer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface JobOfferRepository : JpaRepository<JobOffer, UUID>