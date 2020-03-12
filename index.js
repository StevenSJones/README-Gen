const axios = require('axios');//Call to the axios library 
const inquirer = require('inquirer');//calling the inquirer library that prompts the user via q's on command line
const fs = require('fs');//creates and writes to the file 
{
  // {
  //   login: 'StevenSJones',
  //   id: 56704209,
  //   node_id: 'MDQ6VXNlcjU2NzA0MjA5',
  //   avatar_url: 'https://avatars0.githubusercontent.com/u/56704209?v=4',
  //   gravatar_id: '',
  //   url: 'https://api.github.com/users/StevenSJones',
  //   html_url: 'https://github.com/StevenSJones',
  //   followers_url: 'https://api.github.com/users/StevenSJones/followers',
  //   following_url: 'https://api.github.com/users/StevenSJones/following{/other_user}',
  //   gists_url: 'https://api.github.com/users/StevenSJones/gists{/gist_id}',
  //   starred_url: 'https://api.github.com/users/StevenSJones/starred{/owner}{/repo}',
  //   subscriptions_url: 'https://api.github.com/users/StevenSJones/subscriptions',
  //   organizations_url: 'https://api.github.com/users/StevenSJones/orgs',
  //   repos_url: 'https://api.github.com/users/StevenSJones/repos',
  //   events_url: 'https://api.github.com/users/StevenSJones/events{/privacy}',
  //   received_events_url: 'https://api.github.com/users/StevenSJones/received_events',
  //   type: 'User',
  //   site_admin: false,
  //   name: 'SS Jones',
  //   company: null,
  //   blog: 'linkedin.com/in/steven-jones-285a33115',
  //   location: 'Denver, CO',
  //   email: null,
  //   hireable: true,
  //   bio: null,
  //   public_repos: 12,
  //   public_gists: 0,
  //   followers: 1,
  //   following: 1,
  //   created_at: '2019-10-18T00:02:09Z',
  //   updated_at: '2020-03-12T02:40:14Z'
  // }
}
const questions = [
  {
    type: "confirm",
    name: "dayQuestion",
    message: "Is it daytime?"
  }
];
// Make a request for a user with a given ID
axios.get('https://api.github.com/users/stevensJones')
  .then(function (response) {
    // If successful then print to the console the data, avatar_url, 
    console.log(response.data);
    console.log('**********************************************');
    console.log(response.data.avatar_url);
    //create a file that is a dot mark down file
    fs.writeFileSync("readme.md", `${response.data} \n ${response.data.avatar_url}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
// Inquierer 
inquirer
  .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  })










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