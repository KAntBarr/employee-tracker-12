const {queriesController} = require('./controllers'); // why is this line of code crashing my app
const { intro, second, third } = require('./questions');
const inquirer = require('inquirer');
// const queriesController = '';

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
                        await queriesController.viewDepartments();
                        break;
                    case 'Roles':
                        await queriesController.viewRoles();
                        break;
                    case 'Employees':
                        newResponse = await inquirer.prompt(third.view_emp);
                        await askMore(newResponse);
                        break;
                    case 'Salaries':
                        await queriesController.viewSalaries();
                        break;
                };
                break;
            case 'add':
                switch (value) {
                    case 'Departments':
                        await queriesController.addDepartment();
                        break;
                    case 'Roles':
                        await queriesController.addRole();
                        break;
                    case 'Employees':
                        await queriesController.addEmployee();
                        break;
                };
                break;
            case 'update':
                switch (value) {
                    case 'Departments':
                        await queriesController.updateDepartment();
                        break;
                    case 'Roles':
                        await queriesController.updateRole();
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
                        await queriesController.deleteDepartment();
                        break;
                    case 'Roles':
                        await queriesController.deleteRole();
                        break;
                    case 'Employees':
                        await queriesController.deleteEmployee();
                        break;
                };
                break;
            case 'view-sort':
                switch (value) {
                    case 'Department':
                        await queriesController.viewByDept();
                        break;
                    case 'Manager':
                        await queriesController.viewByManager();
                        break;
                    default:
                        await queriesController.viewEmployees();
                        break;
                };
                break;
            case 'update-emp':
                switch (value) {
                    case 'Role':
                        await queriesController.updateEmpRole();
                        break;
                    case 'Manager':
                        await queriesController.updateEmpManager();
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
    // let response;
    while (runFlag) {
        try {
            // console.log("test1");
            const response = await inquirer.prompt(intro);
            // response = await inquirer.prompt(second.view);
            // console.log("test2");
            if (response.intro == 'Quit') {
                runFlag = false;
            } else {
                // await askMore(response);
            }
        } catch (error) {
            console.log(error);
            throw new Error("Couldn't get a response.");
        }
    }
    console.log('quitting');
};

main();
// console.log("test3"); // putting this here made a bug that prints the first question twice
// process.stdin.resume();