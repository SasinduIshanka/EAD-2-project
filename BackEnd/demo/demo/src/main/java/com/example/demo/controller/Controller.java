package com.example.demo.controller;

import com.example.demo.models.Student;
import com.example.demo.repositories.StudentRepository;
import org.hibernate.mapping.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.source.InvalidConfigurationPropertyValueException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RelationNotFoundException;
import javax.websocket.server.PathParam;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class Controller {

    @Autowired
    StudentRepository studentRepo;

    //search student by ID
    @GetMapping(path = "/search/{id}")
    Student searchByID(@PathVariable("id") int id)
    {
        return studentRepo.SearchByID(id);


    }

    @GetMapping(path = "/sn/{name}")
    List<Student> searchByName(@PathVariable String name)
    {
        return studentRepo.SearchByName(name);


    }
    //////////////////////////////////////////////////////////////////////////////////

    @GetMapping(path = "/all")
    public List<Student> getAllDetails() {

        return  studentRepo.findAll();

    }


    //insert
    @PostMapping(path = "/insert")
    void insertDetails(@RequestBody Student student)
    {
        studentRepo.save(student);

    }


    // delete student rest api
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployeeStudent(@PathVariable int id){
        Student student = studentRepo.findById(id)
                .orElseThrow(() -> {
                    return new InvalidConfigurationPropertyValueException("Employee not exist " , studentRepo,"");
                });

        studentRepo.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    // get student by id rest api
    @GetMapping("/find/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
        Student student = studentRepo.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("Employee not exist " , studentRepo,""));
        return ResponseEntity.ok(student);
    }

    // update student by id rest api
    @PutMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student studentObject){
        Student student = studentRepo.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("Employee not exist " , studentRepo,""));

        student.setName(studentObject.getName());
        student.setNic(studentObject.getNic());
        student.setBirthday(studentObject.getBirthday());
        student.setAddress(studentObject.getAddress());
        student.setMobile(studentObject.getMobile());
        student.setTelephone(studentObject.getTelephone());



        Student updatedStudent = studentRepo.save(student);
        return ResponseEntity.ok(updatedStudent);
    }


}
