DROP DATABASE IF EXISTS numbers;
CREATE DATABASE numbers;
USE numbers;
CREATE TABLE integers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    number INT,
    numberName VARCHAR(20)
);
INSERT INTO integers (number, numberName) VALUES
(3, "three"), (6, "six"), (12, "twelve"), (20, "twenty");