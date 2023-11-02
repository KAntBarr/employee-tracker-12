const inquirer = require('inquirer');
const { intro, second, third } = require('./questions');
const queryDriver = require('./controllers/queriesController.js');

async function askMore(response) {
    console.log(Object.keys(response)[0], response[`${Object.keys(response)[0]}`]);

    const key = `${Object.keys(response)[0]}`;
    const value = response[`${Object.keys(response)[0]}`];

    let newResponse;
    try {
        switch (key) {
            case 'intro':
                switch (value) {
                    case 'View':
                        newResponse = await inquirer.prompt(second.view);
                        await askMore(newResponse);
                        break;
                    case 'Add':
                        newResponse = await inquirer.prompt(second.add);
                        await askMore(newResponse);
                        break;
                    case 'Update':
                        newResponse = await inquirer.prompt(second.update);
                        await askMore(newResponse);
                        break;
                    case 'Delete':
                        newResponse = await inquirer.prompt(second.delete);
                        await askMore(newResponse);
                        break;
                    default:
                        console.log("intro key case error");
                };
                break;
            case 'view':
                switch (value) {
                    case 'Departments':
                        await queryDriver.viewDepartments();
                        break;
                    case 'Roles':
                        await queryDriver.viewRoles();
                        break;
                    case 'Employees':
                        newResponse = await inquirer.prompt(third.view_emp);
                        await askMore(newResponse);
                        break;
                    case 'Salaries':
                        await queryDriver.viewSalaries();
                        break;
                };
                break;
            case 'add':
                switch (value) {
                    case 'Departments':
                        await queryDriver.addDepartment();
                        break;
                    case 'Roles':
                        await queryDriver.addRole();
                        break;
                    case 'Employees':
                        await queryDriver.addEmployee();
                        break;
                };
                break;
            case 'update':
                switch (value) {
                    case 'Departments':
                        await queryDriver.updateDepartment();
                        break;
                    case 'Roles':
                        await queryDriver.updateRole();
                        break;
                    case 'Employees':
                        newResponse = await inquirer.prompt(third.update_emp);
                        await askMore(newResponse);
                        break;
                };
                break;
            case 'delete':
                switch (value) {
                    case 'Departments':
                        await queryDriver.deleteDepartment();
                        break;
                    case 'Roles':
                        await queryDriver.deleteRole();
                        break;
                    case 'Employees':
                        await queryDriver.deleteEmployee();
                        break;
                };
                break;
            case 'view-sort':
                switch (value) {
                    case 'Department':
                        await queryDriver.viewByDept();
                        break;
                    case 'Manager':
                        await queryDriver.viewByManager();
                        break;
                    default:
                        await queryDriver.viewEmployees();
                        break;
                };
                break;
            case 'update-emp':
                switch (value) {
                    case 'Role':
                        await queryDriver.updateEmpRole();
                        break;
                    case 'Manager':
                        await queryDriver.updateEmpManager();
                        break;
                };
                break;
        };
    } catch (error) {
        console.log(error);
        throw new Error("Error asking next question");
    }
    // console.log("exitting askMore");

}


async function main() {
    let runFlag = true;
    let response;
    while (runFlag) {
        try {
            console.log("test1");
            response = await inquirer.prompt(intro);
            console.log("test2");
            if (response.intro == 'Quit') {
                runFlag = false;
            } else {
                await askMore(response);
            }
        } catch (error) {
            console.log(error);
            throw new Error("Couldn't get a response.");
        }
    }
    console.log('quitting');
};

main();