package com.student_management.controller;

import com.student_management.model.Student;
import com.student_management.service.StudentService;
import com.student_management.service.impl.StudentServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/student")
    public ResponseEntity<Student> saveStudent(@RequestBody Student student){
        Student savedStudent = studentService.saveStudent(student);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents(){
        List<Student> studentList = studentService.getStudents();
        return new ResponseEntity<>(studentList,HttpStatus.OK);
    }

    @GetMapping("/student/email")
    public ResponseEntity<?> searchStudentById(@RequestParam String email){
        Student student = studentService.searchStudentByEmail(email);
        return new ResponseEntity<>(student,HttpStatus.OK);
    }

    @DeleteMapping("student/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable long id){
        try {
            studentService.deleteStudent(id);
            return new ResponseEntity<>("Successfully deleted the student : "+id, HttpStatus.OK);
        }catch (EntityNotFoundException ex){
            return new ResponseEntity<>(ex.getMessage(),HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("student/{id}")
    public ResponseEntity<?> getStudentById(@PathVariable long id){
        Student student=studentService.getStudentById(id);
        if (student==null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(student);
    }

    @PatchMapping("/student/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable long id , @RequestBody Student student){
        Student updatedStudent=studentService.updateStudent(id,student);

        if (updatedStudent==null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updatedStudent);
    }
}
