const inquirer = require('inquirer');
var fs = require('fs');



var completeMarkdown = '';


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'project_title',
    },
    {
      type: 'input',
      message: 'Describe your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Table of contents (optional)',
      name: 'table_of_contents',
    },
    {
      type: 'input',
      message: 'Installation',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contributions',
      name: 'contributions',
    },
    {
      type: 'input',
      message: 'Test Instructions',
      name: 'test_instructions',
    },
    {
      type: 'input',
      message: 'License',
      name: 'license',
    },
    {
      type: 'input',
      message: 'GitHub username',
      name: 'github_username',
    },
    {
      type: 'input',
      message: 'Email address',
      name: 'email_address',
    }
  ])
  .then((response) => {
    
  completeMarkdown += '# ' + response.project_title + '\n';
  completeMarkdown += '## Description'  + '\n';
  completeMarkdown += response.description + '\n';
  completeMarkdown += '## Table of contents'  + '\n';
  completeMarkdown += response.table_of_contents + '\n';
  completeMarkdown += '## Installation'  + '\n';
  completeMarkdown += response.installation + '\n';
  completeMarkdown += '## Usage'  + '\n';
  completeMarkdown += response.usage + '\n';
  completeMarkdown += '## Contributions'  + '\n';
  completeMarkdown += response.contributions + '\n';
  completeMarkdown += '## Test Instructions'  + '\n';
  completeMarkdown += response.test_instructions + '\n';
  completeMarkdown += '## License'  + '\n';
  completeMarkdown += response.license + '\n';
  completeMarkdown += '## GitHub username'  + '\n';
  completeMarkdown += response.github_username + '\n';
  completeMarkdown += '## Email address'  + '\n';
  completeMarkdown += response.email_address + '\n';


  
fs.appendFile('README.md', completeMarkdown, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

  });
