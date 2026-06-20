package com.deyan.jobtracker.model.entity

import jakarta.persistence.Column
import java.util.UUID
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Table
import jakarta.persistence.GenerationType
import jakarta.persistence.OneToMany
import java.time.LocalDateTime
import org.hibernate.annotations.CreationTimestamp

@Entity
@Table(name = "application_users")
class ApplicationUser {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @Column(nullable = false, unique = true, length = 100)
    var email: String = ""

    @Column(nullable = false, length = 255)
    var password: String = ""

    @Column(nullable = false, unique = false, length = 750)
    var fullName: String = ""

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    var createdAt: LocalDateTime? = null

    @OneToMany(mappedBy = "user")
    var jobApplications: MutableList<JobApplication> = mutableListOf()

}
