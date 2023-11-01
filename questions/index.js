const intro = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        default: "Square",
        choices: [
            "Circle",
            "Triangle",
            "quit",
        ]
    },
    {
        type: 'input',
        message: 'Input logo text (3 characters max):',
        name: 'text',
        default: "SVG"
    },
]



module.exports = {
    intro,

};