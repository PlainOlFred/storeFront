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


### Usage
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
  
 ### Demo
 #### Customer view and Buy
  ![Customer](https://user-images.githubusercontent.com/52435014/67153338-1bbac600-f2ad-11e9-8ae6-50f322979eaa.gif)
 #### View Inventory (Manager)
 ![viewinventory](https://user-images.githubusercontent.com/52435014/67153361-6fc5aa80-f2ad-11e9-9361-d10180d9766e.gif)
#### View Low Inventory (Manager)
![viewlowinventory](https://user-images.githubusercontent.com/52435014/67153379-bf0bdb00-f2ad-11e9-96c1-af1d6b060f40.gif)
#### Add Inventory (Manager)
![addinventory](https://user-images.githubusercontent.com/52435014/67153388-eb275c00-f2ad-11e9-847e-c396d0d1a54b.gif)
#### Add Product (Manager)
![addproduct](https://user-images.githubusercontent.com/52435014/67153399-11e59280-f2ae-11e9-9b8a-3028d6b7d266.gif)
#### Create Department (Supervisor)
![newdepo](https://user-images.githubusercontent.com/52435014/67153412-35a8d880-f2ae-11e9-95c5-aa8c1b887d59.gif)
#### View Departmentd (Supervisor)
![viewsupertable](https://user-images.githubusercontent.com/52435014/67153418-55d89780-f2ae-11e9-8ca9-dd465eed6cfe.gif)




  

  
  

    
   



