package com.student_management.service.impl;

import com.student_management.model.Student;
import com.student_management.repository.StudentRepository;
import com.student_management.service.StudentService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student searchStudentByEmail(String email) {
//        return studentRepository.searchStudentByEmail(email);
        return null;
    }

    @Override
    public void deleteStudent(long id) {
        if (!studentRepository.existsById(id)){
            throw new EntityNotFoundException("Student : "+id+ " Not Found");
        }
        studentRepository.deleteById(id);
    }

    @Override
    public Student getStudentById(long id) {
        return studentRepository.findById(id).orElse(null);
    }

    @Override
    public Student updateStudent(long id, Student student) {
        Optional<Student> optionalStudent=studentRepository.findById(id);
        if (optionalStudent.isPresent()){
            Student studentExist=optionalStudent.get();

            studentExist.setEmail(student.getEmail());
            studentExist.setDob(student.getDob());
            studentExist.setFirstName(student.getFirstName());
            studentExist.setLastName(student.getLastName());
            studentExist.setGender(student.getGender());
            studentExist.setPhone(student.getPhone());

            return studentRepository.save(studentExist);
        }
        return null;
    }
}
