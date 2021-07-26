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