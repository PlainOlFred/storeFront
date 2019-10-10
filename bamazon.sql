CREATE DATABASE  bamazon;
USE bamazon;


CREATE TABLE products (
  id INTEGER(10) AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50),
  price DECIMAL(10,2),
  stock_quantity INTEGER(1000), 
  PRIMARY KEY (id)
)

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('HomeTechSmart Lamp','Household', 60.00, 100);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('10-Speed Floor Fan','HouseHold', 24.00, 100);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('24in Flatscreen TV', 'Electronics' 250.00, 2);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('Red Bottom Bass', 'Music' 176.00, 4);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('Volley Ball', 'Sporting Goods' 20.00, 100);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('Chicken Salad', 'Grocereies' 2.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('Foot Ball', 'Sporting Goods' 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('Complere Home Theater', 'Electronics' 1500.00, 1);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('Summer Belt', 'Clothing', 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_qfuantity) 
  VALUES ('Biker Boots', 'Clothing', 2.50, 100);


