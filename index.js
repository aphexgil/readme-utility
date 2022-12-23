// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What is your GitHub username?',
    'What is your email address?',
    'Provide a short description of your project.',
    'How does a user install the project?',
    'Provide instructions and examples for use.',
    'Provide instructions on how to run tests, if you made any.',
    'List your collaborators, if any, with links to their GitHub profiles.',
    'How can other developers contribute to this project?',
    'What License would you like to use?'
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const str = generateMarkdown(data);
    console.log(str);

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'username',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'test',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'collaberators',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'contrib',
        },
        {
            type: 'list',
            message: questions[9],
            name: 'license',
            choices: ['MIT License', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense' ]
        }
    ])
    .then((response) =>
        writeToFile("LEADME.md", response)
    );
}

// Function call to initialize app
init();
