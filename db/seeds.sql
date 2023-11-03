USE employee_tracker_db;

INSERT INTO departments(name)
VALUES("support"),
	("accounting"),
    ("human resources"),
    ("development"),
    ("sales");

INSERT INTO roles(title, department_id)
VALUES("support engineer", 1), -- 1
	("defect analyst", 1), -- 2
    ("accountant", 2), -- 3
    ("accounting supervisor", 2), -- 4
    ("recruiter", 3), -- 5
    ("hiring manager", 3), -- 6
    ("software engineer", 4), -- 7
    ("senior software engineer", 4), -- 8
    ("account representative", 5), -- 9
    ("sales engineer", 5); -- 10

INSERT INTO employees(first_name, last_name, manager_id, role_id)
VALUES("jim", "yukon", null, 1),
    ("thomas", "heek", null, 2),
    ("alex", "kiju", null, 7),
    ("michael", "reta", null, 9),
    ("jane", "doe", null, 1),
    ("daniel", "smerks", null, 3),
    ("mary", "jane", null, 4),
    ("dakare", "george", null, 10),
    ("joseph", "smith", null, 8),
	("claire", "hamm", null, 5);
    