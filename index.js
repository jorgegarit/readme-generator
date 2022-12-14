// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')

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
                console.log("Please provide a description.")
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
                console.log("Please provide the necessary steps.")
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
                console.log("Please provide a description on how to use your application")
            }
        }
    },

    //  License Section, will be using the this to pull license information rather than generateMarkdown.js
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
    },

    // Languages Used Section
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What was used to build this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node.js']
    },

    // GitHub Username 
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github username?',
        validate: inputUserName => {
            if (inputUserName) {
                return true;
            } else {
                console.log("Please input your GitHub username to continue.")
                return false;
            }
        }
    },

    // Email Section
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email for users to reach you at?',
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log("Please provide a valid email.")
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        // If no error is present and file is created let user know
        console.log("Your README is ready to be viewed!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInputs) {
        console.log(userInputs)
        writeToFile('./dist/README.md', generateMarkdown(userInputs));
    })
}


// Function call to initialize app
init();


