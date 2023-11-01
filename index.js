const inquirer = require('inquirer');
const { intro } = require('./questions');

async function main() {
    let runFlag = true;
    while(runFlag) {
        try {
            const responses = await inquirer.prompt(intro);
            if(responses.action == 'quit') {
                runFlag = false;
            }
        } catch (error) {
            console.log(error);
            throw new Error("Couldn't get a response.");
        }
    }
    console.log('quitting');
};

main();