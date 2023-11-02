const connection = require('../config/connection');
const queries = require('../queries');

async function viewDepartments() {
    
    console.log("viewing departments");
};


async function viewRoles() {

    console.log("viewing roles");
};


async function viewEmployees() {

    console.log("viewing employees");
};


async function viewSalaries() {

    console.log("viewing salaries");
};


async function addDepartment() {

    console.log("adding departments");
};


async function addRole() {

    console.log("adding roles");
};


async function addEmployee() {

    console.log("adding employee");
};


async function updateDepartment() {

    console.log("updating departments");
};


async function updateRole() {

    console.log("updating roles");
};


async function deleteDepartment() {

    console.log("deleting departments");
};


async function deleteRole() {

    console.log("deleting role");
};


async function deleteEmployee() {

    console.log("deleting employee");
};


async function viewByDept() {

    console.log("viewing employees by department");
};


async function viewByManager() {

    console.log("viewing employees by manager");
};


async function updateEmpRole() {

    console.log("updating employee's role");
};


async function updateEmpManager() {

    console.log("updating employee's manager");
};



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