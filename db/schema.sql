DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments(
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT,
    role_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (manager_id) 
    REFERENCES employees(id)
    ON DELETE SET NULL,
    FOREIGN KEY (role_id) 
    REFERENCES roles(id)
    ON DELETE SET NULL
);
