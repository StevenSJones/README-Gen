
const axios = require('axios');//Call to the axios library 
const inquirer = require('inquirer');//calling the inquirer library that prompts the user via q's on command line
const fs = require('fs');//creates and writes to the file 


const questions = [
  
];
// Make a request for a user with a given ID
axios.get('https://api.github.com/users/stevensJones')
  .then(function (response) {
    // If successful then print to the console the data, avatar_url, 
    console.log(response.data);
    console.log(response.data.avatar_url);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
//create a file that is a dot mark down file
fs.writeFileSync("readme.md", "response.data \n response.data.avatar_url" );












/*inquirer.prompt([
  {
      type: "confirm",
      name: "GitHubQ",
      message: "Please input your GITHUB username"
  }
]).then(answers => {//.then function with 
  console.log(answers)
})


//Inquirer helps with asking end user questions, parsing, validating answers, providing errors.
var inquirer = require("inquirer");//calling the inquire library
var fs = require("fs")//calling the fs library

var axios = require("axios")
var dotenv = require("dotenv")
var electron = require("electron")
var open = require("open")
var electrontohtml = require("electrontohtml")

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

//using the fs library, readFile is the function, the first param is the file path, encoding: utf8 is optional, then callback function
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


init();*/