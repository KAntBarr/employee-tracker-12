const viewDepartments = 
`SELECT 
    id,
    name AS 'departments'
FROM
    departments;
`;

const viewRoles = "SELECT 1";

const viewEmployees = "SELECT 1";

const viewSalaries = "SELECT 1";

const addDepartment = "SELECT 1";

const addRole = "SELECT 1";

const addEmployee = "SELECT 1";

const updateDepartment = "SELECT 1";

const updateRole = "SELECT 1";

const deleteDepartment = "SELECT 1";

const deleteRole = "SELECT 1";

const deleteEmployee = "SELECT 1";

const viewByDept = "SELECT 1";

const viewByManager = "SELECT 1";

const updateEmpRole = "SELECT 1";

const updateEmpManager = "SELECT 1";

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
}