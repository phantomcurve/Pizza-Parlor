# Pizza Party

#### This is a simple web app for ordering a tragically fake pizza and calculating the price of said pizza with multiple options.

#### By Tim Roth

## Technologies Used

* HTML
* CSS
* Markdown
* Bootstrap
* Javascript
* jQuery
* VSCode
* Terminal
* GitHub

## Description

This website allows the user to select from 3 different toppings and 3 different sizes to create a pizza of their choosing.

## Tests/Specs

Describe Pizza()
Test: "It should create an object called Pizza with properties of":
* toppings
* size
* current price
Expected outcome: let pizzaParty = new Pizza(toppings, size)

Describe sizePrice()
Test: "It should define and add a specified price for a specified size selection."
Expected outcome: if this.size === small => currentPrice = 15

Describe toppingsPrice()
Test: "It should define and add the price for toppings based on the number of toppings chosen."
Expected outcome: if toppings.length === 2 => this.currentPrice += 6