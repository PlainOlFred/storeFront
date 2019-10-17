const
  mysql = require('mysql'),
  inquirer = require('inquirer');
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
  managerMenu();

});

function managerMenu () {
  console.log('------Manager Menu---------\n')
 
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'managerTask',
      message: 'Select Manager Task',
      choices: ['View Products', 'View Low Inventory', 'Add Inventory', 'Add New Product']
    }
  ])
  .then((ans) => {

    switch(ans.managerTask) {
      case 'View Products':
        viewProducts();
        break;
      case 'View Low Inventory':
        viewLowInventory();
        break;
      case 'Add Inventory':
        addInventory();
        break;
      case 'Add New Product':
        addNewProduct();
        break;
      
    }
  })
}


function viewProducts() {
  console.log('does task')
};

function viewLowInventory() {
  console.log('does task')
};

function addInventory() {
  console.log('does task')
};

function addNewProduct() {
  console.log('does task')
};
