const inquirer = require('inquirer');
const { intro, second, third } = require('./questions');

async function askMore(response) {
    console.log(Object.keys(response)[0], response[`${Object.keys(response)[0]}`]);

    const key = `${Object.keys(response)[0]}`;
    const value = response[`${Object.keys(response)[0]}`];

    let newResponse;

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
                    console.log("viewing departments");
                    break;
                case 'Roles':
                    console.log("viewing roles");
                    break;
                case 'Employees':
                    newResponse = await inquirer.prompt(third.view_emp);
                    await askMore(newResponse);
                    break;
                case 'Salaries':
                    console.log("viewing salaries");
                    break;
            };
            break;
        case 'add':
            switch (value) {
                case 'Departments':
                    console.log("adding departments");
                    break;
                case 'Roles':
                    console.log("adding roles");
                    break;
                case 'Employees':
                    console.log("adding employee");
                    break;
            };
            break;
        case 'update':
            switch (value) {
                case 'Departments':
                    console.log("updating departments");
                    break;
                case 'Roles':
                    console.log("updating roles");
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
                    console.log("deleting departments");
                    break;
                case 'Roles':
                    console.log("deleting roles");
                    break;
                case 'Employees':
                    console.log("deleting employee");
                    break;
            };
            break;
        case 'view-sort':
            switch (value) {
                case 'Department':
                    console.log("viewing employees by department");
                    break;
                case 'Manager':
                    console.log("viewing employees by manager");
                    break;
            };
            break;
        case 'update-emp':
            switch (value) {
                case 'Role':
                    console.log("updating employee's role");
                    break;
                case 'Manager':
                    console.log("updating employee's manager");
                    break;
            };
            break;
    };
    // console.log("exitting askMore");
}


async function main() {
    let runFlag = true;
    while (runFlag) {
        try {
            const response = await inquirer.prompt(intro);
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