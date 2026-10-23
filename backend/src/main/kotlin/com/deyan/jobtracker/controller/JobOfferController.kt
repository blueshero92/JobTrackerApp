package com.deyan.jobtracker.controller

import com.deyan.jobtracker.model.dto.JobOfferDto
import com.deyan.jobtracker.service.JobOfferService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping

@RestController
@RequestMapping("/api/jobOffers")
class JobOfferController(private val jobOfferService: JobOfferService) {

    @GetMapping
    fun getAllJobOffers() : List<JobOfferDto> = jobOfferService.getAllJobOffers()

}