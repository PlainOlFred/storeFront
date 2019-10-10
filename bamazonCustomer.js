const
  mysql = require('mysql');
  

const connection = mysql.createConnection({
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
  connection.query('SELECT * FROM products', (err, res) => {
  if (err) throw err;

    console.log("-----BELOW ITEMS ARE IN STOCK-----\n");
    // console.log(res);
    for(let item of res) {
        // console.log(item)
        for(let [key, value] of Object.entries(item)){
          console.log(`${key} : ${value}`)
        }
        console.log('\n')
    }
    connection.end()
    }
  )
}

