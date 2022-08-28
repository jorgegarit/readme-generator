// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMardown = require('./Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    // Project Title Section
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: inputTitle => {
            if (inputTitle) {
                return true;
            } else {
                console.log("Please enter a title for your project.")
                return false;
            }
        }

    }, 

    // Project Description Section
    {
        type: 'input',
        name: 'description',
        message: "Please add a short description of your project.",
        validate: inputDescription => {
            if (inputDescription) {
                return true;
            } else {
                console.log("Please add a description of your project.")
                return false;
            }
        }
    },

    // Installation Section
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps needed in order to install your application?',
        validate: inputInstall => {
            if (inputInstall) {
                return true;
            } else {
                console.log("Please provide the necessary steps tp install your application.")
                return false;
            }
        }    
    },

    // How to Use Section
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
        validate: inputUsage => {
            if (inputUsage) {
                return true;
            } else {
                console.log("Please provide description on how to use your application")
            }
        }
    },

    //  Licensed Used Section
    {
        type: 'list',
        name: 'license',
        message: "Please select a license that best works for your project.",
        choices: [
            {
                name: 'MIT',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            },
            {
                name: 'Apache',
                value: '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            },
            {
                name: 'GPL',
                value: '[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            },
            {
                name: 'none',
                value: 'none'
            }

        ]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
