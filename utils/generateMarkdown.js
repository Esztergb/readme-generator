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
  // if (license === "MIT") {
  //   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  // } else if (license === "GNU GPLv3") {
  //   return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  // } else if (license === "The Unlicense") {
  //   return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  // } else if (license === "GNU AGPLv3") {
  //   return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  // } else if (license === "GNU LGPLv3") {
  //   return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  // } else if (license === "Mozilla Public License 2.0") {
  //   return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  // } else if (license === "Apache license 2.0") {
  //   return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  // } else if (license === "Boost Software License 1.0") {
  //   return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
//   } else {
//     return "";
//   }
// }

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
  * [Contributing](#contributing)
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
  If you have any questions about this projects, please contact me directly by *[email](${
    data.email
  })*. 
  Please visit my *[GitHub Page](https://github.com/${
    data.github
  })* to view my other projects.`;
}

module.exports = generateMarkdown;
