//Business Logic

function Pizza (size, crust, toppings, sauce) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;
  this.cost = 0;
};

Pizza.prototype.priceForSize = function() {
  if (this.size === 'large')  {
    this.cost += 25;
 }  else if (this.size === 'medium') {
    this.cost += 19;
 }  else if (this.size === 'small') {
    this.cost += 15;
 }  else {
    this.cost += 10;
 };
 return this.cost;
};

Pizza.prototype.priceForCrust = function() {
    if (this.crust === 'original')  {
    this.cost += 0;
  } else if (this.crust === 'thin') {
    this.cost += 0.5;
  } else {
    this.cost += 1;
  };
  return this.cost;
};


Pizza.prototype.priceForToppings = function() {
  for (var i = 0; i < this.toppings.length; i++) {
    this.cost += 0.20;
  };
  return this.cost;
};

Pizza.prototype.priceForSauce = function() {
  if (this.sauce === 'tomato') {
    this.cost += 0;
  } else if ( this.sauce === 'alfredo') {
      this.cost += 0.5;
  } else if (this.sauce === 'marinara') {
      this.cost += 0.3;
  };
  return this.cost;
};


    //User Innterface Logic
$(document).ready(function() {
  $("form#pizza_options").submit(function(event) {
    event.preventDefault();


  var size = $("input:radio[name=pizza-size]:checked").val();
  var crust = $("input:radio[name=crust]:checked").val();
  var sauce = $("input:radio[name=sauce]:checked").val();
  var toppings = [];

    $("input:checkbox[name=toppings]:checked").each(function() {
      console.log($(this).val())
      toppings.push($(this).val());
    });



    var newPizza = new Pizza(size, crust, toppings, sauce);
    var sizePrice = newPizza.priceForSize();
    var crustPrice = newPizza.priceForCrust();
    var toppingsPrice = newPizza.priceForToppings();
    var saucePrice = newPizza.priceForSauce();
   
    $("#total_price").text("$" + newPizza.cost.toFixed(2));
  });
});
