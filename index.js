// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//array of questions for user input
const questions = () => {
  //using inquirer to prompt questions to user
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide!",
      name: "description",
    },
    {
      type: "input",
      message: "Table of Contents:",
      name: "content",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message:
        "How do you use this app? Provide instructions and examples for use (screenshots as needed)!",
      name: "usage",
    },
    {
      type: "list",
      message: "What kind of licence should your project have?",
      name: "license",
      choices: ["MIT", "GNU GPLv3", "The Unlicense"],
      default: ["MIT"],
    },
    {
      type: "input",
      message: "Please share any guidelines for other developers on how to contribute!",
      name: "contributing",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
      default: "npm test",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
};



  // .then((data) => {
  //   const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

  //   fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
  //     err ? console.log(err) : console.log("Success!")
  //   );
  // });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
