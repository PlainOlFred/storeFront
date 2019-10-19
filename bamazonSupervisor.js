const
  mysql = require('mysql'),
  inquirer = require('inquirer'),
  Table = require('cli-table');

let 
  query,
  item;

const connection = mysql.createConnection( {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  supervisorMenu();

});

function supervisorMenu () {
  console.log('\n------Supervisor Menu---------\n')
 
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'supervisorTask',
      message: 'Select Manager Task',
      choices: ['View Products Sales by Department', 'Create New Department']
    }
  ])
  .then((ans) => {

    switch(ans.supervisorTask) {
      case 'View Products Sales by Department':
        viewProductsSalesByDepartment();
        break;
      case 'Create New Department':
        createNewDepartment();
        break;
    }
  })
}

function viewProductsSalesByDepartment() {
 console.log('ha');

  cosnt table = new Table({
    head: ['ID', 'Department', 'Overhead Cost', 'Sales', 'Profit']
  , colWidths: [100, 200]
});
 
  // table is an Array, so you can `push`, `unshift`, `splice` and friends
  table.push(
    ['First value', 'Second value'],  
    ['First value', 'Second value']
) ;
 goBack();
};
function createNewDepartment() {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'newDepartmentName',
      message: 'Enter New Department Name'
    },
    {
      type: 'input',
      name: 'newDepartmentOHC',
      message: `Enter New Department Overhead Cost`
    }
  ])
  .then((ans) => {
    query = `INSERT INTO departments (department_name, over_head_costs) `;
    query +=  `VALUES ('${ans.newDepartmentName}', ${ans.newDepartmentOHC})`

    connection.query(query, (err, res) => {
      if (err) throw err;
      console.log("###Department### Added!\n");
      goBack();

    });
   
    console.log(`\n`);   
  });
};

function goBack() {
  inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'mangerMenu',
      message: 'return to menu'
    }
  ])
  .then( (ans) => {
   supervisorMenu();
  })
}