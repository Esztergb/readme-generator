// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "Title of project:",
      name: "title",
    },
    {
      type: "input",
      message: "Project Description:",
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
      type: "input",
      message: "License:",
      name: "license",
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
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
