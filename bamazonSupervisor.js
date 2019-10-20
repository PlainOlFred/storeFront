const
  mysql = require('mysql'),
  inquirer = require('inquirer'),
  Table = require('cli-table');

let 
  query,
  item,
  accum;

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

  


  query = `SELECT department_id 'Department id',department_name 'Department', over_head_costs 'OHC', `;
	query += `SUM(product_sales) productSales `; 
  query += `FROM products p LEFT JOIN departments USING (department_name) `;
  query += `GROUP BY department_id,department_name, OHC ;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    let table = new Table({
    head: ['ID', 'Department', 'Overhead Cost', 'Sales', 'Profit']
  , colWidths: [7, 33, 10, 10, 10]
  });


    for(row of res) {
      let rowData = [row['Department id'], row['Department'], row['OHC'], row['productSales']];
      rowData.push(rowData[3]-rowData[2]); //calculate profit
      table.push(rowData)
    }


    console.log(table.toString());
    goBack();
  })
  
 
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