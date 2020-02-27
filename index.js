

var inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "confirm",
        name: "dayQuestion",
        message: "Is it daytime?"
    }
]).then(function (answers) {
    console.log(answers)
});


/*
const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
*/