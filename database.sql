DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price INTEGER(11),
    stock_quantity INTEGER(11),
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('iPhone', 'Electronics', 600, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Sony TV', 'Electronics', 300, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Loveseat', 'Home Decor', 200, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Mens Fossil Watch', 'Fashion', 100, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('MacBook', 'Electronics', 800, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Beats Headphones', 'Electronics', 90, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('27.5 Trek Mountain Bike', 'Exercise', 500, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Gold Mens Ring', 'Jewelry', 200, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Coffee Maker', 'Kitchen', 40, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('iPad', 'Electronics', 250, 4);

