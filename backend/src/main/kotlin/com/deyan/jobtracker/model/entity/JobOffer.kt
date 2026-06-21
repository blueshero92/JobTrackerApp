package com.deyan.jobtracker.model.entity

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "job_offers")
class JobOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @Column(nullable = false, length = 255)
    var title: String = ""

    @Column(nullable = false)
    var description: String = ""

    @ManyToOne
    @JoinColumn(name = "company_id")
    lateinit var company: Company

    @Column(name = "is_active", nullable = false)
    var isActive: Boolean = true;

    @OneToMany(mappedBy = "jobOffer")
    var jobApplications: MutableList<JobApplication> = mutableListOf()
}