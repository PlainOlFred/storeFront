# storeFront

# Node.js & MySQL

### Customer View (MVP)

- [X] Create MySQL Database `bamazon`

- [X]  Create `products` table

    - [X]  Populate `products` with 10 starting products

- [X] `bamazonCustomer.js` 

   - [X] Prompt user to enter product id
   
   - [X] Ptompt user to enter quantity
   
   - [X] Verifies stock quantity and places order


### Manager View (Additional Feature)

- [X] `bamazonManager.js`

- [X] Manger menu options:

    * View Products for Sale - View all inventory (including out-of-stock)
    
    * View Low Inventory - View all inventory with under 5 in stock
    
    * Add to Inventory - Update total stock quantity of a product (recount) 
    
    * Add New Product - Add product to stock inventory
   


### Supervisor View (Additional Feature)

- [X] Create `departments` in `bamazon` database

- [X] `product_sales` column in `products` table 

- [X] `bamazonSupervisor.js`

- [X] Supervisor menu options

   * View Product Sales by Department 
   
   * Create New Department 

- [X] Display profit by department summary table  `View Product Sales by Department`



### Prerequisite

   
   - [MySQL](https://www.npmjs.com/package/mysql)

   
   - [inquirer](https://www.npmjs.com/package/inquirer)


## Usage
.
  1. Intialize package.json `$ npm init -y`

  2. Install node packages 
   
  4. Use snippets from `bamazon.sql` to create `bamazon` database.
  
  5. Node commmands
     - Customer View:
          - `$ node bamazonCustomer.js`
     - Manager View:
          - `$ node bamazonManger.js`
     - Supervisor View:
          - `$ node bamazonSupervisor.js`
  6. Follow Command Prompts

    
   



