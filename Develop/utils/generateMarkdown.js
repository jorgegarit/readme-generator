// This J.S will contain the skeleton 

function generateMarkdown(data) {
  return `
    # ${data.title}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)
    - [License](#license)
    - [Languages](#languages)
    - [Contact](#contact-section)

    ## Description
    ${data.description}
    ## Installation
    ${data.install}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Languages
    ${data.laguages}
    ## Contact
    - Github: [${data.userName}](https://github.com/${data.userName})
    - Email: [${data.email}](mailto:user@email.com)
  `;
}

module.exports = generateMarkdown;
