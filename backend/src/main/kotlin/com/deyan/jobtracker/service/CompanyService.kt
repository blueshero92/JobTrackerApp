package com.deyan.jobtracker.service

import com.deyan.jobtracker.model.dto.CompanyDto
import com.deyan.jobtracker.repository.CompanyRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class CompanyService(private val companyRepository: CompanyRepository) {

    @Transactional(readOnly = true)
    fun getAllCompanies(): List<CompanyDto> =
        companyRepository.findAll().map { CompanyDto(it.id, it.name, it.location) }
}
