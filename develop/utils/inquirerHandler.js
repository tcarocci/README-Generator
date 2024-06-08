const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

import('inquirer').then(({ default: inquirer }) => {
    const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What would you like to title your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project:',
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to include a Table of Contents?',
            default: true,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for contributing:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions for testing:',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ];

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) throw err;
            console.log(`${fileName} has been created successfully.`);
        });
    }

    function init() {
        inquirer
            .prompt(questions)
            .then((answers) => {
                const readmeContent = generateMarkdown(answers);
                
                writeToFile('README.md', readmeContent);
            });
    }

    init();
}).catch((err) => {
    console.error('Error importing inquirer:', err);
});