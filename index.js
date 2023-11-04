const inquirer = require('inquirer');
const { queriesController } = require('./controllers'); // why is this line of code crashing my app -- bc the db wasn't created
const { intro, second, third } = require('./questions');
const Table = require('cli-table');
require('colors');

function showResult(results) {
    // console.log(results);

    const keys = Object.keys(results[0]);
    // console.log(keys);
    const headers = keys.map(key => key.cyan);
    const table = new Table({
        head: headers,
    });

    results.forEach(row => {
        const columnValues = []
        keys.forEach(key => {
            columnValues.push(row[key]);
        })
        table.push(columnValues);
    });

    console.log(table.toString());

};

async function askMore(response) {
    // console.log(Object.keys(response)[0], response[`${Object.keys(response)[0]}`]);

    const key = `${Object.keys(response)[0]}`;
    const value = response[`${Object.keys(response)[0]}`];

    let newResponse;
    let results;

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
                        [results] = await queriesController.viewDepartments();
                        showResult(results);
                        break;
                    case 'Roles':
                        [results] = await queriesController.viewRoles();
                        showResult(results);
                        break;
                    case 'Employees':
                        newResponse = await inquirer.prompt(third.view_emp);
                        await askMore(newResponse);
                        break;
                    case 'Salaries':
                        [results] = await queriesController.viewSalaries();
                        showResult(results);
                        break;
                };
                break;
            case 'add':
                switch (value) {
                    case 'Departments':
                        [results] = await queriesController.addDepartment();
                        showResult(results);
                        break;
                    case 'Roles':
                        [results] = await queriesController.addRole();
                        showResult(results);
                        break;
                    case 'Employees':
                        [results] = await queriesController.addEmployee();
                        showResult(results);
                        break;
                };
                break;
            case 'update':
                switch (value) {
                    case 'Departments':
                        [results] = await queriesController.updateDepartment();
                        showResult(results);
                        break;
                    case 'Roles':
                        [results] = await queriesController.updateRole();
                        showResult(results);
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
                        [results] = await queriesController.deleteDepartment();
                        showResult(results);
                        break;
                    case 'Roles':
                        [results] = await queriesController.deleteRole();
                        showResult(results);
                        break;
                    case 'Employees':
                        [results] = await queriesController.deleteEmployee();
                        showResult(results);
                        break;
                };
                break;
            case 'view-sort':
                switch (value) {
                    case 'Default':
                        [results] = await queriesController.viewEmployees();
                        showResult(results);
                        break;
                    case 'Department':
                        [results] = await queriesController.viewByDept();
                        showResult(results);
                        break;
                    case 'Manager':
                        [results] = await queriesController.viewByManager();
                        showResult(results);
                        break;
                };
                break;
            case 'update-emp':
                switch (value) {
                    case 'Role':
                        [results] = await queriesController.updateEmpRole();
                        showResult(results);
                        break;
                    case 'Manager':
                        [results] = await queriesController.updateEmpManager();
                        showResult(results);
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
