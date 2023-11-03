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
            default: "View",
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
            default: "View",
            choices: [
                "Departments",
                "Roles",
                "Employees",
                "Go back",
            ]
        }
    ],
    update: [
        {
            type: 'list',
            message: 'What would you like to add?',
            name: 'update',
            default: "View",
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
            message: 'What would you like to add?',
            name: 'delete',
            default: "View",
            choices: [
                "Departments",
                "Roles",
                "Employees",
                "Go back",
            ]
        }
    ]
}

const third = {
    view_emp: [
        {
            type: 'list',
            message: 'Sort employees by: ',
            name: 'view-sort',
            default: "View",
            choices: [
                "Default",
                "Department",
                "Manager",
                "Go back",
            ]
        }
    ],
    update_emp: [
        {
            type: 'list',
            message: 'Update employee\'s: ',
            name: 'update-emp',
            default: "View",
            choices: [
                "Role",
                "Manager",
                "Go back",
            ]
        }
    ],
}

// {
//     type: 'input',
//     message: 'Input logo text (3 characters max):',
//     name: 'text',
//     default: "SVG"
// },


module.exports = {
    intro,
    second,
    third,
};