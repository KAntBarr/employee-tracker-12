const connection = require('../config/connection'); 
const queries = require('../queries');

async function viewDepartments() {
    
    console.log("viewing departments");
    const query = queries.viewDepartments;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to view departments");
    }
};


async function viewRoles() {

    console.log("viewing roles");
    const query = queries.viewRoles;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to view roles");
    }
};


async function viewEmployees() {

    console.log("viewing employees");
    const query = queries.viewEmployees;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to view employees");
    }
};


async function viewSalaries() {

    console.log("viewing salaries");
    const query = queries.viewSalaries;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to view salaries");
    }
};


async function addDepartment(parameters = []) {

    console.log("adding departments");
    const query = queries.addDepartment;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to add a department");
    }
};


async function addRole(parameters = []) {

    console.log("adding roles");
    const query = queries.addRole;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to add a role");
    }
};


async function addEmployee(parameters = []) {

    console.log("adding employee");
    const query = queries.addEmployee;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to add an employee");
    }
};


async function updateDepartment(parameters = []) {

    console.log("updating departments");
    const query = queries.updateDepartment;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to update a department");
    }
};


async function updateRole(parameters = []) {

    console.log("updating roles");
    const query = queries.updateRole;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to update a role");
    }
};


async function updateEmployee(parameters = []) {

    console.log("updating employee's role");
    const query = queries.updateEmp;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to update an employee's role");
    }
};


async function deleteDepartment(parameters = []) {

    console.log("deleting departments");
    const query = queries.deleteDepartment;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to delete a department");
    }
};


async function deleteRole(parameters = []) {

    console.log("deleting role");
    const query = queries.deleteRole;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to delete a role");
    }
};


async function deleteEmployee(parameters = []) {

    console.log("deleting employee");
    const query = queries.deleteEmployee;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        console.log(error);
        throw new Error("Error running query to delete an employee");
    }
};


async function viewByDept() {

    console.log("viewing employees by department");
    const query = queries.viewByDept;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to view employees by department");
    }
};


async function viewByManager() {

    console.log("viewing employees by manager");
    const query = queries.viewByManager;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query to view employees by manager");
    }
};


async function simpleRoleView() {

    console.log("simpleRoleView");
    const query = queries.simpleRoleView;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query simpleRoleView");
    }
}


async function simpleEmployeeView() {

    console.log("simpleEmployeeView");
    const query = queries.simpleEmployeeView;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query simpleEmployeeView");
    }
}


async function simpleDeptView() {

    console.log("simpleDeptView");
    const query = queries.simpleDeptView;
    try {
        const [rows, fields] = await connection.query(query); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query simpleDeptView");
    }
}

async function getDepartment(parameters = []) {

    console.log("getDepartment");
    const query = queries.getDepartment;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query getDepartment");
    }
}

async function getRole(parameters = []) {

    console.log("getRole");
    const query = queries.getRole;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query getRole");
    }
}

async function getEmployee(parameters = []) {

    console.log("getEmployee");
    const query = queries.getEmployee;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query getEmployee");
    }
}

async function showOtherEmps(parameters = []) {

    console.log("showOtherEmps");
    const query = queries.showOtherEmps;
    try {
        const [rows, fields] = await connection.query(query, parameters); //'SELECT * FROM todos;'
        return [rows, fields];
    } catch (error) {
        throw new Error("Error running query showOtherEmps");
    }
}

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
    updateEmployee,
    simpleEmployeeView,
    simpleRoleView,
    simpleDeptView,
    getEmployee,
    getRole,
    getDepartment,
    showOtherEmps,

    end,
}