package com.deyan.jobtracker.service

import com.deyan.jobtracker.model.dto.JobOfferDto
import com.deyan.jobtracker.repository.JobOfferRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class JobOfferService(private val jobOfferRepository: JobOfferRepository)  {

    @Transactional(readOnly = true)
    fun getAllJobOffers() : List<JobOfferDto>{
        return jobOfferRepository.findAll().map{ JobOfferDto(it.id, it.title, it.description, it.company) }
    }

}