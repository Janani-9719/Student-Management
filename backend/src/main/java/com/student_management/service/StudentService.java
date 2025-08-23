package com.student_management.service;

import com.student_management.model.Student;

import java.util.List;


public interface StudentService {
    public Student saveStudent(Student student);

    List<Student> getStudents();

    Student searchStudentByEmail(String email);

    void deleteStudent(long id);

    Student getStudentById(long id);

    Student updateStudent(long id, Student student);
}
