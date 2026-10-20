package com.deyan.jobtracker.controller

import com.deyan.jobtracker.model.dto.CompanyResponse
import com.deyan.jobtracker.service.CompanyService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/companies")
class CompanyController(private val companyService: CompanyService) {

    @GetMapping
    fun getAllCompanies(): List<CompanyResponse> = companyService.getAllCompanies()
}
