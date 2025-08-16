package com.student_management.controller;

import com.student_management.model.Student;
import com.student_management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/students")
public class RegistrationController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/student")
    public ResponseEntity<Student> saveStudent(@RequestBody Student student){
        Student savedStudent= studentService.saveStudent(student);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping("/test")
    public ResponseEntity<?> testGet(){
        return new ResponseEntity<>("Hello",HttpStatus.OK);
    }
}
