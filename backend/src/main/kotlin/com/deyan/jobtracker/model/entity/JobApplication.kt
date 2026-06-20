package com.deyan.jobtracker.model.entity

import com.deyan.jobtracker.model.enum.Status
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import jakarta.persistence.Enumerated
import jakarta.persistence.EnumType
import org.hibernate.annotations.CreationTimestamp
import java.time.LocalDateTime
import java.util.UUID

@Entity
@Table(name = "job_applications")
class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @ManyToOne
    @JoinColumn(name = "user_id")
    var user: ApplicationUser? = null

    @ManyToOne
    @JoinColumn(name = "company_id")
    var company: Company? = null

    @Column(nullable = false, length = 100)
    var positionTitle: String? = ""

    @Column(nullable = true, length = 1000)
    var jobUrl: String = ""

    @Enumerated(EnumType.STRING)
    var status: Status = Status.APPLIED

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    var appliedDate: LocalDateTime? = null

    @OneToMany(mappedBy = "application")
    var interviews: MutableList<Interview> = mutableListOf()


}