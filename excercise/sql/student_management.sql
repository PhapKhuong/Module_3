CREATE DATABASE student_management;
USE student_management;

CREATE TABLE student (
	id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(45),
   age INT,
   country VARCHAR(45)
);
    
ALTER TABLE student
CHANGE name studnet_name VARCHAR(45),
CHANGE id student_id INT,
CHANGE age student_age INT;

CREATE TABLE class (
	class_id INT PRIMARY KEY AUTO_INCREMENT,
   class_name VARCHAR(10)
);
    
CREATE TABLE teacher (
	teacher_id INT PRIMARY KEY AUTO_INCREMENT,
   teacher_name VARCHAR(45),
   teacher_age INT,
   country VARCHAR(45)
);







