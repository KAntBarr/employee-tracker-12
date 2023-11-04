const intro = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'intro',
        default: "View",
        choices: [
            "View",
            "Add",
            "Update",
            "Delete",
            "Quit",
        ]
    },
]

const second = {
    view: [
        {
            type: 'list',
            message: 'What would you like to view?',
            name: 'view',
            choices: [
                "Departments",
                "Roles",
                "Employees",
                "Salaries",
                "Go back",
            ]
        }
    ],
    add: [
        {
            type: 'list',
            message: 'What would you like to add?',
            name: 'add',
            choices: [
                "Department",
                "Role",
                "Employee",
                "Go back",
            ]
        }
    ],
    update: [
        {
            type: 'list',
            message: 'What would you like to update?',
            name: 'update',
            choices: [
                "Departments",
                "Roles",
                "Employees",
                "Go back",
            ]
        }
    ],
    delete: [
        {
            type: 'list',
            message: 'What would you like to delete?',
            name: 'delete',
            choices: [
                "Departments",
                "Roles",
                "Employees",
                "Go back",
            ]
        }
    ]
}

const view = {
    view_emp: [
        {
            type: 'list',
            message: 'Sort employees by: ',
            name: 'view-emp',
            choices: [
                "Default",
                "Department",
                "Manager",
                "Go back",
            ]
        }
    ],
}

const add = {
    add_dept: [
        {
            type: 'input',
            message: 'What is the name of the department? ',
            name: 'add-dept',
        }
    ],
    add_role: [
        {
            type: 'input',
            message: 'What is the title of the role? ',
            name: 'role-name',
        },
        {
            type: 'input',
            message: 'What is the salary of the role? ',
            name: 'role-salary',
        },
        {
            type: 'list',
            message: 'What department does the role belong to? ',
            name: 'role-dept',
            choices: []
        }
    ],
    add_emp: [
        {
            type: 'input',
            message: 'What is the employee\'s first name? ',
            name: 'emp-fname',
        },
        {
            type: 'input',
            message: 'What is the employee\'s last name? ',
            name: 'emp-lname',
        },
        {
            type: 'list',
            message: 'What is the employee\'s role? ',
            name: 'emp-role',
            choices: []
        },
        {
            type: 'list',
            message: 'Who is the employee\'s manager? ',
            name: 'emp-manager',
            choices: []
        }
    ]

}

const update = {
    update_emp: [
        {
            type: 'list',
            message: 'Which employee would you like to update? ',
            name: 'update-emp',
            choices: []
        },
        {
            type: 'list',
            message: 'Update this employee\'s: ',
            name: 'update-emp-options',
            choices: [
                "First Name",
                "Last Name",
                "Role",
                "Manager",
                "Go back",
            ]
        }
    ],
    update_emp_fname: [
        {
            type: 'input',
            message: 'What is this employee\'s first name? ',
            name: 'update-emp-fname',
        }
    ],
    update_emp_lname: [
        {
            type: 'input',
            message: 'What is this employee\'s last name? ',
            name: 'update-emp-lname',
        }
    ],
    update_emp_role: [
        {
            type: 'list',
            message: 'What is this employee\'s role? ',
            name: 'update-emp-role',
            choices: []
        }
    ],
    update_emp_manager: [
        {
            type: 'list',
            message: 'Who is this employee\'s manager? ',
            name: 'update-emp-manager',
            choices: []
        }
    ],
    update_role: [
        {
            type: 'list',
            message: 'Which role would you like to update? ',
            name: 'update-role',
            choices: []
        },
        {
            type: 'list',
            message: 'Update this role\'s: ',
            name: 'update-role-options',
            choices: [
                "Title",
                "Salary",
                "Department",
            ]
        }
    ],
    update_role_title: [
        {
            type: 'input',
            message: 'What is this role\'s title? ',
            name: 'update-role-title',
        }
    ],
    update_role_salary: [
        {
            type: 'input',
            message: 'What is this role\'s salary? ',
            name: 'update-role-salary',
        }
    ],
    update_role_dept: [
        {
            type: 'list',
            message: 'Which department does this role belong to? ',
            name: 'update-role-dept',
            choices: []
        }
    ],
    update_dept: [
        {
            type: 'list',
            message: 'Which department would you like to update? ',
            name: 'update-dept',
            choices: []
        },
        {
            type: 'input',
            message: 'What is the department\'s name? ',
            name: 'update-dept-name',
        },
    ]

}

const remove = {
    remove_emp: [
        {
            type: 'list',
            message: 'Which employee would you like to remove? ',
            name: 'remove-emp',
            choices: []
        }
    ],
    remove_role: [
        {
            type: 'list',
            message: 'Which role would you like to remove? ',
            name: 'remove-role',
            choices: []
        }
    ],
    remove_dept: [
        {
            type: 'list',
            message: 'Which department would you like to remove? ',
            name: 'remove-dept',
            choices: []
        }
    ]

}


module.exports = {
    intro,
    second,
    view,
    add,
    update,
    remove,

};