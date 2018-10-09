var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});


inquirer.prompt([{
    type: "list",
    name: "manage",
    message: "What would you like to do?",
    choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
}, ]).then(function (response) {
    console.log(response.manage);
    switch (response.manage) {
        case "View Products for Sale":
            viewProducts()
            break;
        case "View Low Inventory":
            viewInventory()
            break;
        case "Add to Inventory":
            addInventory()
            break;
        case "Add New Product":
            addProduct()
            break;
    }
});


function viewProducts() {
    connection.query("SELECT id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id);
            console.log(res[i].product_name);
            console.log("Price: " + res[i].price);
            console.log("Stock: " + res[i].stock_quantity);
            console.log(" ");
        }
    });
}

function viewInventory() {
    connection.query("SELECT id, product_name, price, stock_quantity FROM products WHERE stock_quantity <?", [5], function (err, res) {
        if (err) throw err;
        // console.log(res);
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id);
            console.log(res[i].product_name);
            // console.log("Price: " + res[i].price);
            console.log("Stock: " + res[i].stock_quantity);
            console.log(" ");
        }
    });
}

function addInventory() {
    inquirer.prompt([{
        type: "input",
        name: "inventory",
        message: "Which product would you like to update?",
    }, ]).then(function (response) {
        connection.query("SELECT id, product_name, stock_quantity FROM products WHERE product_name=?", [response.inventory], function (err, res) {
            if (err) throw err;
            console.log("Product ID: " + res[0].id);
            console.log(res[0].product_name);
            console.log("Stock: " + res[0].stock_quantity);
            inquirer.prompt([{
                type: "input",
                name: "addMore",
                message: "New stock quantity: ",
            }, ]).then(function (response) {
                connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: response.addMore}, {product_name: res[0].product_name}], function (err, res) {
                    if (err) throw err;
                    console.log("Stock quantity updated");
                });
            });
        });
    });
}

function addProduct() {
    inquirer.prompt([{
        type: "input",
        name: "new_product_name",
        message: "New product name: ",
    }, 
    {
        type: "input",
        name: "new_product_price",
        message: "New product price: ",
    },
    {
        type: "input",
        name: "new_product_stock",
        message: "New product stock: ",
    },
]).then(function (response) {
        // console.log(response.new_product);
        connection.query("INSERT INTO products (product_name, price, stock_quantity) VALUE (?,?,?)", [response.new_product_name, response.new_product_price, response.new_product_stock], function (err, res) {
            if (err) throw err;
            console.log("New product added successfully!");
            console.log("Product name: " + response.new_product_name);
            console.log("Price: " + response.new_product_price);
            console.log("Stock: " + response.new_product_stock);
        });
    });
}