//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.currentPrice = 0
}

Pizza.prototype.sizePrice = function() {

  if (this.size === 'Small') {
    this.currentPrice += 15
  } else if (this.size === 'Medium') {
    this.currentPrice += 20
  } else if (this.size === 'Large') {
    this.currentPrice += 25
  }
  return this.currentPrice;
};

Pizza.prototype.toppingsPrice = function() {
  this.currentPrice = this.currentPrice + (this.toppings.length * 3);
  return this.currentPrice;
}

 //UI Logic

 $(document).ready(function() {
  $("form#toppings-sizes").submit(function(event) {
    event.preventDefault();
    
    let pizzaSize = $("#size").val();
    toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    let pizzaParty = new Pizza (toppings, pizzaSize)
    
    pizzaParty.sizePrice();
    pizzaParty.toppingsPrice();
    let totalPrice = pizzaParty.currentPrice;
    $(".price").show();
    $("#yourPizza").text(pizzaSize + " " + toppings.join(" ") + " pizza!");
    $("#totalPrice").text(totalPrice);
  });
});