package com.deyan.jobtracker.config

import com.deyan.jobtracker.repository.CompanyRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component
import com.deyan.jobtracker.model.entity.Company

@Component
class DataSeeder(private val companyRepository: CompanyRepository) : CommandLineRunner
{
    override fun run(vararg args: String?) {

        if (companyRepository.count() == 0L) {
            println("Database empty. Seeding...")

            val companies = listOf(
                Company(name = "Apex Global Solutions", location = "Tokyo, Japan"),
                Company(name = "Quantum Labs Tech", location = "Munich, Germany"),
                Company(name = "CyberDyne Systems", location = "Austin, USA"),
                Company(name = "Initech Software", location = "London, UK"),
                Company(name = "Stark Enterprises East", location = "Sofia, Bulgaria")
            )

            companyRepository.saveAll(companies)
        }
    }
}