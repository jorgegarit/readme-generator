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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
