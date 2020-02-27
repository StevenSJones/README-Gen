
//Inquirer helps with asking end user questions, parsing, validating answers, providing errors.
var inquirer = require("inquirer");//calling the inquire library

var fs = require("fs")//calling the fs library

const questions = [];

inquirer.prompt([
    {
        type: "confirm",
        name: "dayQuestion",
        message: "Is it daytime?"
    }
]).then(function (answers) {
    console.log(answers)
});

//readFile is the function the first param is the file path, encoding: utf8 is optional, then callback function
fs.readFile("data.pdf", "utf8", function readFile(fileName, data) {
if (error) {
    return console.log(error);
}
//in this function i can format the data prior to sending back to client with an api call
function init(data) {
}
//console.log(data);
});




function writeFile(fileName, data) {

})

function init() {

}


init();