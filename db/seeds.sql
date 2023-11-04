USE employee_tracker_db;

INSERT INTO departments(name)
VALUES("support"),
	("accounting"),
    ("human resources"),
    ("development"),
    ("sales");

INSERT INTO roles(title, department_id, salary)
VALUES("support engineer", 1, 78001.15), -- 1
	("defect analyst", 1, 100000), -- 2
    ("accountant", 2, 65000), -- 3
    ("accounting supervisor", 2, 90000), -- 4
    ("recruiter", 3, 70000), -- 5
    ("hiring manager", 3, 85000), -- 6
    ("software engineer", 4, 110000), -- 7
    ("senior software engineer", 4, 145000), -- 8
    ("account representative", 5, 60000), -- 9
    ("sales engineer", 5, 105000); -- 10

INSERT INTO employees(first_name, last_name, manager_id, role_id)
VALUES("jim", "yukon", null, 1),
    ("thomas", "heek", null, 2),
    ("alex", "kiju", null, 7), -- 9
    ("michael", "reta", null, 9),
    ("jane", "doe", null, 1),
    ("daniel", "smerks", null, 3), -- 7 ... i wonder how this is gonna go since its referring to a later record/row/employee ... it didnt work
    ("mary", "jane", null, 4),
    ("dakare", "george", null, 10),
    ("joseph", "smith", null, 8),
	("claire", "hamm", null, 5);
    
UPDATE
	employees
SET
	manager_id = 9
WHERE
	id = 3;
    
    UPDATE
	employees
SET
	manager_id = 7
WHERE
	id = 6;
    