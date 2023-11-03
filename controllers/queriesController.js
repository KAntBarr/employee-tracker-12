const connection = require('../config/connection'); 
const queries = require('../queries');

async function viewDepartments() {
    
    console.log("viewing departments");
    const query = queries.viewDepartments;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to view departments");
    }
};


async function viewRoles() {

    console.log("viewing roles");
    const query = queries.viewRoles;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to view roles");
    }
};


async function viewEmployees() {

    console.log("viewing employees");
    const query = queries.viewEmployees;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to view employees");
    }
};


async function viewSalaries() {

    console.log("viewing salaries");
    const query = queries.viewSalaries;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to view salaries");
    }
};


async function addDepartment() {

    console.log("adding departments");
    const query = queries.addDepartment;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to add a department");
    }
};


async function addRole() {

    console.log("adding roles");
    const query = queries.addRole;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to add a role");
    }
};


async function addEmployee() {

    console.log("adding employee");
    const query = queries.addEmployee;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to add an employee");
    }
};


async function updateDepartment() {

    console.log("updating departments");
    const query = queries.updateDepartment;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to update a department");
    }
};


async function updateRole() {

    console.log("updating roles");
    const query = queries.updateRole;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to update a role");
    }
};


async function deleteDepartment() {

    console.log("deleting departments");
    const query = queries.deleteDepartment;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to delete a department");
    }
};


async function deleteRole() {

    console.log("deleting role");
    const query = queries.deleteRole;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to delete a role");
    }
};


async function deleteEmployee() {

    console.log("deleting employee");
    const query = queries.deleteEmployee;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to delete an employee");
    }
};


async function viewByDept() {

    console.log("viewing employees by department");
    const query = queries.viewByDept;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to view employees by department");
    }
};


async function viewByManager() {

    console.log("viewing employees by manager");
    const query = queries.viewByManager;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to view employees by manager");
    }
};


async function updateEmpRole() {

    console.log("updating employee's role");
    const query = queries.updateEmpRole;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to update an employee's role");
    }
};


async function updateEmpManager() {

    console.log("updating employee's manager");
    const query = queries.updateEmpManager;
    try {
        const [rows] = await connection.query(query); //'SELECT * FROM todos;'
        return rows;
    } catch (error) {
        throw new Error("Error running query to update an employee's manager");
    }
};

async function end() {
    await connection.end();
}

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
    end,
}