package com.deyan.jobtracker.model.dto

import java.util.UUID

data class CompanyResponse(
    val id: UUID?,
    val name: String,
    val location: String
)
