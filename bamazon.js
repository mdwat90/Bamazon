var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.query("SELECT product_name, price, stock_quantity FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].product_name);
        console.log("Price: " + res[i].price);
        console.log("Stock: " + res[i].stock_quantity);
        console.log(" ");
    }
    inquirer.prompt([{
        type: "list",
        name: "product",
        message: "What product would you like to buy?",
        choices: function () {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
                choiceArray.push(res[i].product_name);
            }
            return choiceArray;
        },
    }, ]).then(function (response) {
        var product = response.product;
        console.log(product);

        inquirer.prompt([{
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"
        }, ]).then(function (response) {
            console.log("Your purchase quantity: " + response.quantity);

            connection.query("SELECT stock_quantity FROM products WHERE product_name=?", [product], function (err, res) {
                if (err) throw err;
                console.log("Stock quantity: " + res[0].stock_quantity);
                if (parseInt(response.quantity) > res[0].stock_quantity) {
                    console.log("Insufficient Stock!");
                } else {
                    connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: (res[0].stock_quantity - parseInt(response.quantity))}, {product_name:[product]}], function (err, res) {
                        if (err) throw err;
                        // console.log(res);
                    });
                    console.log("New stock quantity: " + (res[0].stock_quantity - parseInt(response.quantity)));
                    connection.query("SELECT price FROM products WHERE product_name=?", [product], function (err, res) {
                        if (err) throw err;
                        // console.log(product);
                        console.log("Cost today: $" + (res[0].price * parseInt(response.quantity)));
                        console.log("Purchase Complete");
                        console.log("Thank you for your purchase!");
                    });
                }
            });
        });
    });
});