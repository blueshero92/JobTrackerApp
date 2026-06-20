package com.deyan.jobtracker.model.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Column
import jakarta.persistence.Table
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import org.hibernate.annotations.CreationTimestamp
import java.time.LocalDateTime
import java.util.UUID

@Entity
@Table(name = "companies")
class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @Column(nullable = false, length = 750)
    var name: String = "";

    @Column(nullable = true, length = 1000)
    var location: String = "";

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    var createdAt: LocalDateTime? = null

    @OneToMany(mappedBy = "company")
    var jobApplications: MutableList<JobApplication> = mutableListOf()
}