package com.deyan.jobtracker.model.entity

import com.deyan.jobtracker.model.enum.Result
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Table
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import java.time.LocalDateTime
import java.util.UUID

@Entity
@Table(name = "interviews")
class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @ManyToOne
    @JoinColumn(name = "application_id", nullable = false)
    var application: JobApplication? = null

    @Column(nullable = false, length = 50)
    var interviewType: String = ""

    @Column(nullable = false, updatable = false)
    var interviewDate: LocalDateTime? = null

    @Enumerated(EnumType.STRING)
    var result: Result? = Result.PENDING

    @Column(nullable = true, length = 1000)
    var notes: String = ""
}