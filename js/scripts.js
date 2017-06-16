//Business Logic

    function Pizza (size, crust, toppings, sauce) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.sauce = sauce;
    }

    Pizza.prototype.price = function() {

      var total1 = 0;

      if (this.size.includes('Large'))
     {    total1 += 25;
     }  else if (this.size.includes('Medium'))
     {    total1 += 19;
     }  else if (this.size.includes('Small'))
     {    total1 += 15;
     }  else if (this.size.includes('Personal'))
     {    total1 += 10;
    } else {
        return NaN;
      }

    Pizza.prototype.price2 = function() {
      var total2 = 0;

      if (this.crust.includes('Original'))
    { total2 += 0;
    }   else if (this.crust.includes('Thin'))
    { total2 += 0.5;
    }   else if (this.crust.includes('Stuffed'))
    { total2 += 1;
  } else {
    return NaN;
  }
      consol.log(total2.valueOf)
}
this.crust.forEach(function(element){
  total += itemPrice(element);

  Pizza.prototype.price3 = function() {
    var total3 = 0;

    if (this.toppings.includes('Pepperoni'))
   {    total3 += 0.2;
   }  else if (this.toppings.includes('Breakfast Bacon'))
   {    total3 += 0.3;
   }  else if (this.toppings.includes('Sausage'))
   {    total3 += 0.2;
   }  else if (this.toppings.includes('Pineapples'))
   {    total3 += 0.1;
   }  else if (this.toppings.includes('Black Olives'))
   {    total3 += 0.1;
   }  else if (this.toppings.includes('Green Peppers'))
   {    total3 += 0.1;
   }  else if (this.toppings.includes('Mushrooms'))
   {    total3 += 0.1;
   }  else if (this.toppings.includes('Diced Tomatoes'))
   {    total3 += 0.1;
  } else {
      return NaN;
    }
  }

      this.toppings.forEach(function(element){
        total += itemPrice(element);
      });

      Pizza.prototype.price4 = function() {
        var total4 = 0;

        if (this.sauce.includes('tomato'))
        {   total4 += 0;
        } else if ( this.sauce.includes('alfredo'))
        {   total4 += 0.5;
        }  else if (this.sauce.includes('marinara'))
        {   total4 += 0.3;
        }

        var total = (total1 + total2 + total3 + total4);


      return total;
    };
  });
};

  var itemPrice = function(item) {

    var items = "";

      //sizes (4)
      "Large": 25, "Medium": 19, "Small": 15, "Personal": 10,

      //crusts (3)
      "Thin": 0.5, "Stuffed": 1, "Original": 0,

      //toppings (6)
      "Pepperoni": 0.2, "Black Olives": 0.1, "Pineapples": 0.1, "Green Pepper": 0.1, "Mushrooms": 0.1, "Breakfast Bacon": 0.3, "Sausage": 0.2, "Diced Tomatoes": 0.1,

      //sause (3)
      "Alfredo Sauce": 0.5, "Robust Inspired Tomato Sauce": 0, "Hearty Marinara Sauce": 0.3,
    };
      return items[item];

    //User Innterface Logic
$(document).ready(function() {
  $("form#pizza_options").submit(function(event) {
    event.preventDefault();

var pizza;

  var size, crust, toppings, sauce = [ ];

    size = $("#new-size").val();

    $("input:checkbox[name=topping-choice]:checked").each(function() {

      toppings.push($(this).val());

    });



    pizza = new Pizza(size, crust, toppings, sauce);

    $("#button").onclick((total).append("#total_price"));

//    $().text(pizza.price().toFixed());



  //  pizza.toppings.forEach(function(element) {

    //  $("").append();

    });

    $("#total-price").text("$" + pizza.price().toFixed());

  });

};
};
