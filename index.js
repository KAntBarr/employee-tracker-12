const inquirer = require('inquirer');
const {queriesController} = require('./controllers'); // why is this line of code crashing my app -- bc the db wasn't created
const { intro, second, third } = require('./questions');

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
            const response = await inquirer.prompt(intro);
            if (response.intro == 'Quit') {
                runFlag = false;
                await queriesController.end();
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
