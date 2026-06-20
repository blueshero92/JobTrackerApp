package com.deyan.jobtracker.model.enum

enum class Status (val code: Int, val label: String){

    APPLIED(0, "Applied"),
    INTERVIEW(1, "Interview"),
    OFFER(2, "Offer"),
    REJECTED(3, "Rejected")
}