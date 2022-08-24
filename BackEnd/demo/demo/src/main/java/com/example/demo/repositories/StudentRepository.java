package com.example.demo.repositories;

import com.example.demo.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {

    @Query("select s from Student s where s.id=?1")
    Student SearchByID(int id);

    @Query("select s from Student s where s.name=?1")
    List<Student> SearchByName(String name);

    //@Query("delete from Student s where s.id=:id")
   // void deleteStudentById(@Param("id") int id);




    @Query("delete from Student s where s.id=?1")
    void deleteStudentById(int id);




}
