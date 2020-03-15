
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
      type: "input",
      name: "githubName",
      message: "What is your GITHUB user name?"
    },
     {
    type: "input",
    name: "badge",
    message: "Badge for your project?"
    },
    {
    type: "input",
    name: "projectTitle",
    message: "What is your project title?"
    },
    {
    type: "input",
    name: "description",
    message: "Can you provide a description"
    },
    {
    type: "input",
    name: "tableOfContents",
    message: "Can you provide your table of contents?"
    },
    {
    type: "input",
    name: "installation",
    message: "Installation?"
    },
    {
    type: "input",
    name: "usage",
    message: "Usage?"
    },
    {
    type: "input",
    name: "license",
    message: "License type?"
    },
    {
    type: "input",
    name: "tests",
    message: "tests?"
    },
    {
    type: "input",
    name: "githubQuestions",
    message: "Questions?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
        },
  ];


//calling the inquirer library that prompts the user via q's on command line
const inquirer = require('inquirer');


function askUser() {
    // code to be executed
    // Inquirer 
inquirer
.prompt(questions)
.then(function(answers){
    console.log(answers);
});
}
exports.askUser = askUser;