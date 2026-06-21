package com.deyan.jobtracker.model.entity

import com.deyan.jobtracker.model.enum.Role
import java.util.UUID
import jakarta.persistence.*
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

    @Enumerated(EnumType.STRING)
    @Column(name = "role", length = 50)
    var role: Role = Role.USER

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    var company: Company? = null

    @OneToMany(mappedBy = "user")
    var jobApplications: MutableList<JobApplication> = mutableListOf()

}
