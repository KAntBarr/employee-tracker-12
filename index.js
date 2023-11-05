const inquirer = require('inquirer');
const { queriesController } = require('./controllers'); // why is this line of code crashing my app -- bc the db wasn't created
const { intro, second, view, add, update, remove } = require('./questions');
const Table = require('cli-table');
require('colors');

function showResult(results, isString) {
    // console.log(results);
    if (isString === -1) {
        console.log('there was an error');
        return;
    } else if (isString === 1) {
        console.log(results);
        return;
    }

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
    let id;
    let data;
    let parameters;

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
                        newResponse = await inquirer.prompt(view.view_emp);
                        switch (newResponse["view-emp"]) {
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
                    case 'Salaries':
                        [results] = await queriesController.viewSalaries();
                        showResult(results);
                        break;
                };
                break;
            case 'add':
                switch (value) {
                    case 'Department':

                        newResponse = await inquirer.prompt(add.add_dept);
                        // console.log(newResponse);

                        [results] = await queriesController.addDepartment([newResponse['add-dept']]);
                        // console.log(results);
                        showResult(`Department '${newResponse['add-dept']}' was added.`, 1);
                        break;
                    case 'Role':
                        [results] = await queriesController.simpleDeptView();

                        add.add_role[2].choices = [];
                        results.forEach(row => {
                            add.add_role[2].choices.push(row.name);
                        })
                        add.add_role[2].choices.push('Go back');
                        newResponse = await inquirer.prompt(add.add_role);
                        if (newResponse['role-dept'] === 'Go back') break;
                        // console.log(newResponse['add-role']);
                        [id, data] = newResponse['role-dept'].split(':');
                        parameters = [
                            newResponse['role-name'],
                            id,
                            newResponse['role-salary']
                        ];

                        [results] = await queriesController.addRole(parameters);
                        showResult(`Role '${newResponse['role-name']}' was added.`, 1);
                        break;
                    case 'Employee':
                        [results] = await queriesController.simpleRoleView();

                        add.add_emp[2].choices = [];
                        results.forEach(row => {
                            add.add_emp[2].choices.push(row.name);
                        });

                        [results] = await queriesController.simpleEmployeeView();

                        add.add_emp[3].choices = [];
                        results.forEach(row => {
                            add.add_emp[3].choices.push(row.name);
                        })
                        add.add_emp[3].choices.push('Go back');
                        newResponse = await inquirer.prompt(add.add_emp);
                        if (newResponse['emp-manager'] === 'Go back') break;
                        // console.log(newResponse['add-role']);
                        const [roleID, roleData] = newResponse['emp-role'].split(':');
                        const [managerID, managerData] = newResponse['emp-manager'].split(':');


                        parameters = [
                            newResponse['emp-fname'],
                            newResponse['emp-lname'],
                            managerID,
                            roleID
                        ];


                        [results] = await queriesController.addEmployee(parameters);
                        showResult(`Employee '${newResponse['emp-fname']} ${newResponse['emp-lname']}' was added.`, 1);
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
                        newResponse = await inquirer.prompt(update.update_emp);
                        switch (newResponse['update-emp']) {
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
                break;
            case 'delete':
                switch (value) {
                    case 'Departments':
                        [results] = await queriesController.simpleDeptView();

                        remove.remove_dept[0].choices = [];
                        results.forEach(row => {
                            remove.remove_dept[0].choices.push(row.name);
                        })
                        remove.remove_dept[0].choices.push('Go back');
                        newResponse = await inquirer.prompt(remove.remove_dept);
                        if (newResponse['remove-dept'] === 'Go back') break;
                        // console.log(newResponse['remove-dept']);
                        [id, data] = newResponse['remove-dept'].split(':');

                        [results] = await queriesController.deleteDepartment([id]);
                        // console.log(results);
                        showResult(`${data} was deleted.`, 1);
                        break;
                    case 'Roles':
                        [results] = await queriesController.simpleRoleView();
                        // console.log(results);
                        remove.remove_role[0].choices = [];
                        results.forEach(row => {
                            remove.remove_role[0].choices.push(row.name);
                        })
                        remove.remove_role[0].choices.push('Go back');
                        newResponse = await inquirer.prompt(remove.remove_role);
                        if (newResponse['remove-role'] === 'Go back') break;
                        // console.log(newResponse['remove-role']);
                        [id, data] = newResponse['remove-role'].split(':');

                        [results] = await queriesController.deleteRole([id]);
                        showResult(`${data} was deleted.`, 1);
                        break;
                    case 'Employees':
                        [results] = await queriesController.simpleEmployeeView();

                        remove.remove_emp[0].choices = [];
                        results.forEach(row => {
                            remove.remove_emp[0].choices.push(row.name);
                        })
                        remove.remove_emp[0].choices.push('Go back');
                        newResponse = await inquirer.prompt(remove.remove_emp);
                        if (newResponse['remove-emp'] === 'Go back') break;
                        // console.log(newResponse['remove-emp']);
                        [id, data] = newResponse['remove-emp'].split(':');

                        [results] = await queriesController.deleteEmployee([id]);
                        showResult(`${data} was deleted.`, 1);
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
