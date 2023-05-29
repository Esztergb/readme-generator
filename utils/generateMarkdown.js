//Licence array
const licenseArr = [
  "MIT",
  "GNU GPLv3",
  "The Unlicense",
  "GNU AGPLv3",
  "GNU LGPLv3",
  "Mozilla Public License 2.0",
  "Apache license 2.0",
  "Boost Software License 1.0",
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === licenseArr[1]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === licenseArr[2]) {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else if (license === licenseArr[3]) {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === licenseArr[4]) {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === licenseArr[5]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === licenseArr[6]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === licenseArr[7]) {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`;
  } else if (license===licenseArr[1]){
      return `[${licenseArr[1]}](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license===licenseArr[2]){
      return `[${licenseArr[2]}](http://unlicense.org)`;
  } else if (license===licenseArr[3]){
      return `[${licenseArr[3]}](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license===licenseArr[4]){
      return `[${licenseArr[4]}](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license===licenseArr[5]){
      return `[${licenseArr[5]}](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license===licenseArr[6]){
      return `[${licenseArr[6]}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license===licenseArr[7]){
      return `[${licenseArr[7]}](https://www.boost.org/LICENSE_1_0.txt)`;
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  This project is licensed under ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${
    data.email
  }. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
