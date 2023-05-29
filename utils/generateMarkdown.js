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
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license===licenseArr[1]){
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license===licenseArr[2]){
      return `http://unlicense.org`;
  } else if (license===licenseArr[3]){
      return `https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license===licenseArr[4]){
      return `https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license===licenseArr[5]){
      return `https://opensource.org/licenses/MPL-2.0`;
  } else if (license===licenseArr[6]){
      return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license===licenseArr[7]){
      return `https://www.boost.org/LICENSE_1_0.txt)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
