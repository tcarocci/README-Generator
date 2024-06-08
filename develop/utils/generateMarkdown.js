function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }

    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

function renderLicenseLink(license) {
    if (!license) {
        return '';
    }

    return `[License](#license)`;
}

function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `## License

This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.`;
}

function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;