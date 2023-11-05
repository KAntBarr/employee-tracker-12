const viewDepartments = 
`SELECT 
    id,
    name AS 'departments'
FROM
    departments;
`;

const viewRoles = 
`SELECT 
    r.title AS "title",
    r.id AS "id",
    d.name AS "department",
    r.salary AS "salary"
FROM
    roles AS r
JOIN
    departments AS d ON r.department_id=d.id;
`;

const viewEmployees = 
`SELECT
    e.id AS "id",
    e.first_name AS "first_name",
    e.last_name AS "last_name",
    r.title AS "title",
    d.name AS "department",
    r.salary AS "salary",
    CASE 
        WHEN CONCAT(m.first_name, ' ', m.last_name) IS NULL THEN 'null'
        ELSE CONCAT(m.first_name, ' ', m.last_name)
    END AS "manager"
FROM
    employees AS e
LEFT JOIN
    roles AS r ON e.role_id=r.id
LEFT JOIN
    departments as d ON r.department_id=d.id
LEFT JOIN
    employees AS m ON e.manager_id=m.id;
`;

const viewSalaries =
`SELECT
    d.name AS "department",
    SUM(r.salary) AS "salary"
FROM
    employees AS e
LEFT JOIN
    roles AS r ON e.role_id=r.id
LEFT JOIN
    departments as d ON r.department_id=d.id
GROUP BY
    d.name
ORDER BY
    salary DESC;
`;

const addDepartment =
`INSERT INTO departments(name)
VALUES(?);
`;

const addRole =
`INSERT INTO roles(title, department_id, salary)
VALUES(?, ?, ?);
`;

const addEmployee =
`INSERT INTO employees(first_name, last_name, manager_id, role_id)
VALUES(?, ?, ?, ?);
`;

const updateDepartment =
`UPDATE
    departments
SET
    name = ?
WHERE
    id = ?;
`;

const updateRole =
`UPDATE
    roles
SET
    title = ?,
    salary = ?,
    department_id = ?
WHERE
    id = ?;
`;

const updateEmp =
`UPDATE
    employees
SET
    first_name = ?,
    last_name = ?,
    manager_id = ?,
    role_id = ?
WHERE
    id = ?;
`;

const deleteDepartment =
`DELETE FROM departments WHERE id = ?;
`;

const deleteRole =
`DELETE FROM roles WHERE id = ?;
`;

const deleteEmployee =
`DELETE FROM employees WHERE id = ?;
`;

const viewByDept =
`SELECT
    e.id AS "id",
    e.first_name AS "first_name",
    e.last_name AS "last_name",
    r.title AS "title",
    d.name AS "department",
    r.salary AS "salary",
    CASE 
        WHEN CONCAT(m.first_name, ' ', m.last_name) IS NULL THEN 'null'
        ELSE CONCAT(m.first_name, ' ', m.last_name)
    END AS "manager"
FROM
    employees AS e
LEFT JOIN
    roles AS r ON e.role_id=r.id
LEFT JOIN
    departments as d ON r.department_id=d.id
LEFT JOIN
    employees AS m ON e.manager_id=m.id
ORDER BY
    d.name ASC;
`;

const viewByManager =
`SELECT
    e.id AS "id",
    e.first_name AS "first_name",
    e.last_name AS "last_name",
    r.title AS "title",
    d.name AS "department",
    r.salary AS "salary",
    CASE 
        WHEN CONCAT(m.first_name, ' ', m.last_name) IS NULL THEN 'null'
        ELSE CONCAT(m.first_name, ' ', m.last_name)
    END AS "manager"
FROM
    employees AS e
LEFT JOIN
    roles AS r ON e.role_id=r.id
LEFT JOIN
    departments as d ON r.department_id=d.id
LEFT JOIN
    employees AS m ON e.manager_id=m.id
ORDER BY
    m.first_name DESC;
`;

const simpleRoleView =
`SELECT
    CONCAT(id, ":", title) AS 'name'
FROM
    roles;
`;

const simpleEmployeeView =
`SELECT
    CONCAT(id, ':', first_name, ' ', last_name) AS 'name'
FROM
    employees;
`;

const simpleDeptView =
`SELECT
    CONCAT(id, ":", name) AS 'name'
FROM
    departments;
`;

const getEmployee =
`SELECT
    *
FROM
    employees
WHERE
    id = ?;
`;

const getRole =
`SELECT
    *
FROM
    roles
WHERE
    id = ?;
`;

const getDepartment =
`SELECT
    *
FROM
    departments
WHERE
    id = ?;
`;

const showOtherEmps =
`SELECT
    CONCAT(id, ':', first_name, ' ', last_name) AS 'name'
FROM
    employees
WHERE
    id != ?;
`;

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    viewSalaries,
    addDepartment,
    addRole,
    addEmployee,
    updateDepartment,
    updateRole,
    updateEmp,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    viewByDept,
    viewByManager,
    simpleRoleView,
    simpleEmployeeView,
    simpleDeptView,
    getDepartment,
    getEmployee,
    getRole,
    showOtherEmps,

}
