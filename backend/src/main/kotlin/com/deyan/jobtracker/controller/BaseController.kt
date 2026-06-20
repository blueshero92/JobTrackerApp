package com.deyan.jobtracker.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class BaseController {

    @GetMapping("/hello")

    fun hello(): String {
        return "hello from backend"
    }

}