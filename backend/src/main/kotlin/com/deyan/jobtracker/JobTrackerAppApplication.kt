package com.deyan.jobtracker

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class JobTrackerAppApplication

fun main(args: Array<String>) {
    runApplication<JobTrackerAppApplication>(*args)
}

