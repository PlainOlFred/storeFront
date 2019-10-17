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
  listStock();

});

function listStock() {
  console.log("-----BELOW ITEMS ARE IN STOCK-----\n");
  query = 'SELECT * FROM products'
  connection.query(query, (err, res) => {
    if (err) throw err;

    for(let item of res) {
        
      for(let [key, value] of Object.entries(item)) {
        console.log(`${key} : ${value}`);
      };
      console.log('\n');
    }
    
      buyProduct();
  })
  

  
};

function buyProduct() {

  inquirer
  .prompt([
  {
    type: 'input',
    name: 'userProductId',
    message : 'Enter the Id of the product you want to buy' 
  },
  {
    type: 'input',
    name: 'userProductQuantity',
    message: `Quantity of  ${'items'} (${'quant'})` //insert product_name & stockquanity
  }
  ])
  .then( (ans) => {
    
    query = `SELECT id, product_name, price, stock_quantity FROM products `;
    query += `WHERE id = ${ans.userProductId}`;

    connection.query(query, (err, res) => {
      if (err) throw err;
      item = res[0];
      

      if (ans.userProductQuantity > item.stock_quantity) {
        console.log(`\nInsufficient quantity!`);
      } else {
        updatedQuantity(ans.userProductId, ans.userProductQuantity, item.stock_quantity);
        console.log(`\n${ans.userProductQuantity}`, item.product_name);
        console.log(`Your Total: ${ans.userProductQuantity * item.price}`)
      }

      connection.end();

    })
  });
}

function updatedQuantity(id, quant, stock_quantity) {
  
  // query = `SELECT id, stock_quantity FROM products `
  query = `UPDATE products SET ? WHERE ?`;
  connection.query(query, 
    [{
      stock_quantity: stock_quantity - quant
    },
    {
      id: id
    }],
    (err, res) => {
      if (err) throw err;

    })

    

}


