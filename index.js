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
                        [results] = await queriesController.simpleDeptView();

                        update.update_dept[0].choices = [];
                        results.forEach(row => {
                            update.update_dept[0].choices.push(row.name);
                        })
                        update.update_dept[0].choices.push('Go back');
                        newResponse = await inquirer.prompt(update.update_dept);
                        if (newResponse['update-dept'] === 'Go back') break;
                        [id, data] = newResponse['update-dept'].split(':');

                        // [results] = await queriesController.getDepartment([id]);

                        parameters = [
                            newResponse['update-dept-name'],
                            id
                        ];

                        [results] = await queriesController.updateDepartment(parameters);
                        showResult(`Department '${data}' updated to '${newResponse['update-dept-name']}'`, 1);
                        break;
                    case 'Roles':
                        [results] = await queriesController.simpleRoleView();

                        update.update_role[0].choices = [];
                        results.forEach(row => {
                            update.update_role[0].choices.push(row.name);
                        })
                        newResponse = await inquirer.prompt(update.update_role);
                        [id, data] = newResponse['update-role'].split(':');

                        [results] = await queriesController.getRole([id]);

                        // console.log(results);

                        parameters = [
                            results[0].title,// title
                            results[0].salary,// salary
                            results[0].department_id,// department_id
                            id// id
                        ];
                        if (newResponse['update-role-options'] === 'Go back') break;
                        switch (newResponse['update-role-options']) {
                            case 'Title':
                                newResponse = await inquirer.prompt(update.update_role_title);
                                parameters[0] = newResponse['update-role-title'];
                                [results] = await queriesController.updateRole(parameters);
                                showResult(`Role '${data}' updated to '${newResponse['update-role-title']}'`, 1);
                                break;
                            case 'Salary':
                                newResponse = await inquirer.prompt(update.update_role_salary);
                                const oldSalary = parameters[1];
                                parameters[1] = Number(newResponse['update-role-salary']);
                                [results] = await queriesController.updateRole(parameters);
                                showResult(`Role '${data}' salary updated from '${oldSalary}' to '${newResponse['update-role-salary']}'`, 1);
                                break;
                            case 'Department':
                                [results] = await queriesController.simpleDeptView();

                                update.update_role_dept[0].choices = [];
                                results.forEach(row => {
                                    update.update_role_dept[0].choices.push(row.name);
                                })
                                update.update_role_dept[0].choices.push('Go back');
                                newResponse = await inquirer.prompt(update.update_role_dept);
                                if (newResponse['update-role-dept'] === 'Go back') break;
                                [id, data] = newResponse['update-role-dept'].split(':');
                                parameters[2] = id;
                                [results] = await queriesController.updateRole(parameters);
                                showResult(`Role '${parameters[0]}' is now under department '${data}'`, 1);
                                break;
                        }
                        break;
                    case 'Employees':
                        [results] = await queriesController.simpleEmployeeView();

                        update.update_emp[0].choices = [];
                        results.forEach(row => {
                            update.update_emp[0].choices.push(row.name);
                        })
                        newResponse = await inquirer.prompt(update.update_emp);
                        [id, data] = newResponse['update-emp'].split(':');

                        [results] = await queriesController.getEmployee([id]);

                        // console.log(results);

                        parameters = [
                            results[0].first_name,// 
                            results[0].last_name,// 
                            results[0].manager_id,//
                            results[0].role_id,
                            id// id
                        ];
                        if (newResponse['update-emp-options'] === 'Go back') break;
                        switch (newResponse['update-emp-options']) {
                            case 'First Name':
                                newResponse = await inquirer.prompt(update.update_emp_fname);
                                const oldFName = parameters[0];
                                parameters[0] = newResponse['update-emp-fname'];
                                [results] = await queriesController.updateEmployee(parameters);
                                showResult(`Employee first name changed from '${oldFName}' to '${parameters[0]}'`, 1);
                                break;
                            case 'Last Name':
                                newResponse = await inquirer.prompt(update.update_emp_lname);
                                const oldLName = parameters[1];
                                parameters[1] = newResponse['update-emp-lname'];
                                [results] = await queriesController.updateEmployee(parameters);
                                showResult(`Employee last name changed from '${oldLName}' to '${parameters[1]}'`, 1);
                                break;
                            case 'Role':
                                [results] = await queriesController.simpleRoleView();

                                update.update_emp_role[0].choices = [];
                                results.forEach(row => {
                                    update.update_emp_role[0].choices.push(row.name);
                                })
                                update.update_emp_role[0].choices.push('Go back');
                                newResponse = await inquirer.prompt(update.update_emp_role);
                                if (newResponse['update-emp-role'] === 'Go back') break;
                                [id, data] = newResponse['update-emp-role'].split(':');
                                parameters[3] = id;
                                [results] = await queriesController.updateEmployee(parameters);
                                showResult(`Employee '${parameters[0]}' now has title '${data}'`, 1);
                                break;
                            case 'Manager':
                                [results] = await queriesController.showOtherEmps([id]);

                                update.update_emp_manager[0].choices = [];
                                results.forEach(row => {
                                    update.update_emp_manager[0].choices.push(row.name);
                                })
                                update.update_emp_manager[0].choices.push('Go back');
                                newResponse = await inquirer.prompt(update.update_emp_manager);
                                if (newResponse['update-emp-manager'] === 'Go back') break;
                                [id, data] = newResponse['update-emp-manager'].split(':');
                                parameters[2] = id;
                                [results] = await queriesController.updateEmployee(parameters);
                                showResult(`Employee '${parameters[0]}' now reports to '${data}'`, 1);
                                break;
                        }
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

    console.log(
`
------------------------------------
          Employee Manager
------------------------------------
`
    );
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
