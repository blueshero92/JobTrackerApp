package com.deyan.jobtracker.model.dto

import com.deyan.jobtracker.model.entity.Company
import java.util.UUID


data class JobOfferDto (
    val id: UUID?,
    val title: String,
    val description: String,
    val company: Company
)