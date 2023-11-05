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

const addRole = "SELECT 1";

const addEmployee = "SELECT 1";

const updateDepartment = "SELECT 1";

const updateRole = "SELECT 1";

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

const updateEmpRole = "SELECT 1";

const updateEmpManager = "SELECT 1";

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
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    viewByDept,
    viewByManager,
    updateEmpRole,
    updateEmpManager,
    simpleRoleView,
    simpleEmployeeView,
    simpleDeptView,

}
