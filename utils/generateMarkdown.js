// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "GNU GPLv3") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license === "The Unlicense") {
    return `http://unlicense.org`;
  } else if (license === "GNU AGPLv3") {
    return `https://www.gnu.org/licenses/agpl-3.0`;
  } else if (license === "GNU LGPLv3") {
    return `https://www.gnu.org/licenses/lgpl-3.0`;
  } else if (license === "Mozilla Public License 2.0") {
    return `https://opensource.org/licenses/MPL-2.0`;
  } else if (license === "Apache license 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Boost Software License 1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "none") {
    return `[![Licence:${license}](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
      license)})`;
  } else {
    return ``;
  };
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License
  This project is covered under the ${license} licence.  
  To learn more click on the following *[link](${renderLicenseLink(license)})*`;
  } else {
    return ``;
  }
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
  * [Contributing](#how-to-contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## How to Contribute 
  ${data.contributing}
  *[Contributor Covenant](https://www.contributor-covenant.org/)*

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this projects, please contact me directly by *email: ${
    data.email
  }*. 
  Please visit my *[GitHub Page](https://github.com/${
    data.github
  })* to view my other projects.`;
}

module.exports = generateMarkdown;
