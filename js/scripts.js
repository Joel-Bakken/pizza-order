$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    function Pizza (size, crust, toppings, sauce) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.sauce = sauce;
    }
    
    Pizza.prototype.price = function() {

      var total = 0; 
      
      if (this.size.includes('Large'))
     {    total += 25;
     }  else if (this.size.includes('Medium'))
     {    total += 19;
     }  else if (this.size.includes('Small'))
     {    total += 15;
     }  else if (this.size.includes('Personal'))
     {    total += 10;
    } else {
        return NaN;
      }      
      this.toppings.forEach(function(element){
        total += itemPrice(element);
      });
      
      return total;
    };  
  });
});
        
  var itemPrice = function(item) {

    var items = {
      
      //sizes
      "large": 25, "Medium": 19, "Small": 15, "Personal": 10, 
      
      //crusts
      "Thin": 0.5, "Stuffed": 1, "Original": 0,
      
      //toppings
      "Pepperoni": 0.2, "Black Olives": 0.1, "Pinapple": 0.1, "Green Pepper": 0.1, "Mushrooms": 0.1, "Breakfast Bacon": 0.3, "Sausage": 0.2, "Diced Tomatoes": 0.1,
      
      //sause
      "Alfredo Sauce": 0.5, "Robust Inspired Tomato Sauce": 0, "Hearty Marinara Sauce": 0.3,
    };
      return items[item];
};
  