const inquirer = require('inquirer');
const { intro, second, third } = require('./questions');

async function askMore(response) {
    console.log(Object.keys(response)[0], response[`${Object.keys(response)[0]}`]);
}


async function main() {
    let runFlag = true;
    while(runFlag) {
        try {
            const response = await inquirer.prompt(intro);
            if(response.intro == 'Quit') {
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