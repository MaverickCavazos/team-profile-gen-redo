const inquirer = require('inquirer');
const pageGenerator = require('./utils/page-template')
const fs = require('fs');

function writeToFile(fileName, data) {
    console.log('writeToFile');
    return fs.writeFileSync(fileName, data)
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            name: 'job',
            choices: ['Manager', 'engineer', 'intern']
        },
    ])
    .then((answers) => {
        writeToFile('index.html', pageGenerator({ ...answers }))

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error);
        } else {
            console.log('something went wrong!');
        }
    });

