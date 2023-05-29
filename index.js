//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//linking to page where the readme is developed
const generatePage = require("./utils/generateMarkdown");


//array of questions for user input using inquirer
const questions = () => {
  
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
  

//Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md")



}

// TODO: Create a function to initialize app
function init() {
questions()
  // getting user answers
  .then((answers) => {
    return generatePage(answers);
  })
  // using data to display on page
  .then((data) => {
    return writeFile(data);
  })
  // catching errors
  .catch((err) => {
    console.log(err);
  });
}

// Function call to initialize app
init();
