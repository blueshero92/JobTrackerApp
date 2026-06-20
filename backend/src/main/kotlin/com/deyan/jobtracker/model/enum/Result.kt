package com.deyan.jobtracker.model.enum

enum class Result (val code: Int, val label: String){

    PENDING(0, "Pending"),
    PASSED(1, "Passed"),
    FAILED(2, "Failed"),

}