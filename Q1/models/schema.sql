
DROP DATABASE school_grades;

CREATE DATABASE school_grades;

USE school_grades;

CREATE TABLE students(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    marks INT,
    PRIMARY KEY(id)
);

CREATE TABLE grades(
    id INT AUTO_INCREMENT NOT NULL,
    min_mark INT,
    max_mark INT,
    PRIMARY KEY (id)
);




INSERT INTO students (name, marks) VALUES ('julia', 88);
INSERT INTO students (name, marks) VALUES ('samsntha', 68);
INSERT INTO students (name, marks) VALUES ('maria', 99);
INSERT INTO students (name, marks) VALUES ('scarlet', 78);
INSERT INTO students (name, marks) VALUES ('ashley', 63);
INSERT INTO students (name, marks) VALUES ('jane', 81);
INSERT INTO students (name, marks) VALUES ('loke', 6);
INSERT INTO students (name, marks) VALUES ('julia', 70);


INSERT INTO grades (min_mark, max_mark) VALUES (0, 9);
INSERT INTO grades (min_mark, max_mark) VALUES (10, 19);
INSERT INTO grades (min_mark, max_mark) VALUES (20, 29);
INSERT INTO grades (min_mark, max_mark) VALUES (30, 39);
INSERT INTO grades (min_mark, max_mark) VALUES (40, 49);
INSERT INTO grades (min_mark, max_mark) VALUES (50, 59);
INSERT INTO grades (min_mark, max_mark) VALUES (60, 69);
INSERT INTO grades (min_mark, max_mark) VALUES (70, 79);
INSERT INTO grades (min_mark, max_mark) VALUES (80, 89);
INSERT INTO grades (min_mark, max_mark) VALUES (90, 100);



-- first question
SELECT * FROM students where marks > 8;

--- second question 
SELECT * FROM students where marks >  8 ORDER BY marks DESC;

-- forth question
UPDATE students SET name = "Null" WHERE marks < 8; 

SELECT * FROM students   where marks < 8 ORDER BY marks DESC;
