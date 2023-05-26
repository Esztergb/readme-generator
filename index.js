// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//array of questions for user input
const questions = () => {
  //using inquirer to prompt questions to user
  return inquirer.prompt([
    {
      type: "input",
      message: "Title of project:",
      name: "title",
    },
    {
      type: "input",
      message:
        "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:",
      name: "description",
    },
    {
      type: "input",
      message: "Table of Contents:",
      name: "content",
    },
    {
      type: "checkbox",
      message: "Installation:",
      name: "installation",
      choices: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage",
    },
    {
      type: "list",
      message: "License:",
      name: "license",
      choices: [],
    },
    {
      type: "input",
      message: "Contributing:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests:",
      name: "tests",
    },
    {
      type: "input",
      message: "Questionsg:",
      name: "questions",
    }
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
