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
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
