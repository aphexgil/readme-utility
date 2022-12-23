// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT License"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else if(license==="GNU AGPLv3"){
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }else if(license==="Mozilla Public License 2.0"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }else if(license==="Apache License 2.0"){
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }else if(license==="Boost Software License 1.0"){
    return `[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }else if(license==="The Unlicense"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }else{
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="MIT License"){
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  }else if(license==="GNU AGPLv3"){
    return `[AGPL v3](https://www.gnu.org/licenses/agpl-3.0)`;
  }else if(license==="Mozilla Public License 2.0"){
    return `[MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
  }else if(license==="Apache License 2.0"){
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }else if(license==="Boost Software License 1.0"){
    return `[LBoost 1.0](https://www.boost.org/LICENSE_1_0.txt)`;
  }else if(license==="The Unlicense"){
    return `[Unlicense](http://unlicense.org/)`;
  }else{
    return ``;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
  if(license==="None"){
    return ``;
  }else{
  return `## License

  This software is covered under ${license}. To find out more, visit ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Testing

${data.test}

## Questions

If you have any questions, direct them to https://github.com/${data.username} or ${data.email}.
`;
}


module.exports = generateMarkdown;
