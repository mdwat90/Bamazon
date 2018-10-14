# Bamazon

# This is an Amazon-like store front CLI application using a mySQL database and Node.js.

# In this applications, users can search the store for their items and see the cost and stock quantity for each item.

# If a user wants to buy something, they will be prompted on what item they would like to buy and how many of that item.

# If the quantity is not sufficient, they will be notified with a console.log("Insufficient Quantity!").

# If there is enough stock, they will be notified of how many they selected, how many are in stock after their selection, and how much their total cost will be, along with a console.log("Thank you for your purchase!"). The new stock quantity will also be logged in the database.

# In the bamazonManager side of this application, the manager can see the ID, item name, price and stock quantity for each item in the store.

# Managers can also see which items are low in stock (<5).

# Managers can then select an item low in stock and update the stock quantity for that item, which will then be logged in the database.

# Finally, managers can also add an entirely new product to the database. They will input the item name, price and stock quantity.

# Within the database, an ID, item name, price and stock quantity are all displayed, along with a total sales column for each product.