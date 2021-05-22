const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let team = [];

function init() {
  //set up prompts
  inquirer
    .prompt([
      {
        type: "input",
        message: " What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
      },
      {
        type: "list",
        message: "Is this employee a manager, engineer or intern?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    //questions for each specific role
    .then(function (response) {
      console.log(response);
      if (response.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the manager's office number?",
              name: "office",
            },
            {
              type: "list",
              message: "Would you like to register another employee?",
              choices: ["Yes", "No"],
              name: "restart",
            },
          ])

          .then(function (managerRes) {
            let newManager = new Manager(
              response.name,
              response.id,
              response.email,
              managerRes.office
            );
            team.push(newManager);
            if (managerRes.restart === "Yes") {
              init();
            } else {
              writeHTML(render(team));
            }

            console.log(team);
          });
      }

      if (response.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the engineer's GitHub username?",
              name: "userName",
            },
            {
              type: "list",
              message: "Would you like to register another employee?",
              choices: ["Yes", "No"],
              name: "restart",
            },
          ])
          .then(function (engineerRes) {
            let newEngineer = new Engineer(
              response.name,
              response.id,
              response.email,
              engineerRes.userName
            );
            team.push(newEngineer);
            if (engineerRes.restart === "Yes") {
              init();
            } else {
              writeHTML(render(team));
            }

            console.log(team);
          });
      }

      if (response.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What school does the intern attend?",
              name: "school",
            },
            {
              type: "list",
              message: "Would you like to register another employee?",
              choices: ["Yes", "No"],
              name: "restart",
            },
          ])
          .then(function (internRes) {
            let newIntern = new Intern(
              response.name,
              response.id,
              response.email,
              internRes.school
            );
            team.push(newIntern);
            if (internRes.restart === "Yes") {
              init();
            } else {
              writeHTML(render(team));
            }

            console.log(team);
          });
      }
    });
}
const writeHTML = (HTML) => {
  fs.writeFileSync(src_path, HTML, (err) => {
    if (err) {
      return console.log(err);
    }
  });
};

init();

// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }
