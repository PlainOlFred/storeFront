CREATE DATABASE  bamazon;
USE bamazon;


CREATE TABLE products (
  id INTEGER(10) AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50),
  price DECIMAL(10,2),
  stock_quantity INTEGER(10), 
  PRIMARY KEY (id)
)

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('HomeTechSmart Lamp','Household', 60.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('10-Speed Floor Fan','HouseHold', 24.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('24in Flatscreen TV', 'Electronics', 250.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('Red Bottom Bass', 'Music', 176.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('Volley Ball', 'Sporting Goods', 20.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('Chicken Salad', 'Grocereies', 2.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('Foot Ball', 'Sporting Goods', 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('Complere Home Theater', 'Electronics', 1500.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('Summer Belt', 'Clothing', 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
  VALUES ('Biker Boots', 'Clothing', 2.50, 100);

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
  department_id INTEGER(10) AUTO_INCREMENT,
  department_name VARCHAR(50),
  over_head_costs DECIMAL(10,2),
  PRIMARY KEY (department_id, department_name)
);

ALTER TABLE products
ADD COLUMN product_sales INT NULL AFTER stock_quantity;

SELECT 
	department_id 'Department id',
	department_name 'Department',
	over_head_costs 'OHC',
	SUM(product_sales) productSales
FROM products p
LEFT JOIN departments 
	USING (department_name)
GROUP BY department_id,department_name, OHC ;
