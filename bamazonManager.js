const
  mysql = require('mysql'),
  inquirer = require('inquirer');
let 
  query,
  item,
  viewInfo ='id, product_name, department_name, price, stock_quantity';

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

  query = `SELECT ${viewInfo} FROM products`
  connection.query(query, (err, res) => {
    if (err) throw err;

    for(let item of res) {
        
      for(let [key, value] of Object.entries(item)) {
        console.log(`${key} : ${value}`);
      };
      console.log('\n');
    }
     goBack();
  })

 
};



function viewLowInventory() {
  query = `SELECT ${viewInfo} FROM products WHERE stock_quantity < 5`
  connection.query(query, (err, res) => {
    if (err) throw err;

    for(let item of res) {
        
      for(let [key, value] of Object.entries(item)) {
        console.log(`${key} : ${value}`);
      };
      console.log('\n');
    }
     goBack();
  })
};

function addInventory() {
  console.log("-----BELOW ITEMS ARE IN STOCK-----\n");
  query = `SELECT ${viewInfo} FROM products`
  connection.query(query, (err, res) => {
    if (err) throw err;

    for(let item of res) {
        
      for(let [key, value] of Object.entries(item)) {
        console.log(`${key} : ${value}`);
      };
      console.log('\n');
    }
    updateInvetory();
  })

}


function updateInvetory() {
  
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerProductId',
      message: 'Enter Id of prouduct to update'
    },
    {
      type: 'input',
      name: 'managerUpdateQuant',
      message: `Enter New Total Quanity`
    },

  ])

  .then((ans) => {
    query = `UPDATE products SET ? WHERE ?`;

    
    connection.query(query, 
    [
      {
        stock_quantity: ans.managerUpdateQuant

      },
      {
        id: ans.managerProductId
      }
    ],
    (err, res) => {
      if (err) throw err;
      console.log("###product### updated!\n");
      goBack();

    });
   
  console.log(`\n`);
  
    
  });

};


function addNewProduct() {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'newProductName',
     
      message: 'Enter New Product Name'
    },
    {
      type: 'input',
      name: 'newProductDepartment',
      message: `Enter New Product Department`
    },
    {
      type: 'input',
      name: 'newProductPrice',
      message: 'Enter New Product Price'
    },
    {
      type: 'input',
      name: 'newProductQuantity',
      message: `Enter New Starting Quantity`
    },

  ])

  .then((ans) => {
    query = `INSERT INTO products (product_name, department_name, price, stock_quantity) `;
    query +=  `VALUES ('${ans.newProductName}', '${ans.newProductDepartment}', ${ans.newProductPrice}, ${ans.newProductQuantity})`

    connection.query(query, (err, res) => {
      if (err) throw err;
      console.log("###product### Added!\n");
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
    managerMenu();
  })
}

