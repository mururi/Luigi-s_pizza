//business logic
function PizzaType(name, image) {
  this.name = name;
  this.image = image;
}

const pizzaList = [
  new PizzaType("Chicken Mushroom", "pizza-chicken-mushroom.jpg"),
  new PizzaType("Pepperoni", "pizza-pepperoni.jpg"),
  new PizzaType("Hawaiian", "pizza-hawaiian.jpg"),
  new PizzaType("Margarita", "pizza-margarita.jpg"),
  new PizzaType("Salami", "pizza-salami.jpg"),
  new PizzaType("Seafood", "pizza-seafood.jpg")
];


//user-interface logic
$(document).ready(function() {
  for(let i = 1; i < 7; i++) {
    $("#menu-item-" + i).click(function() {
      $("#pizza-type").text(pizzaList[i - 1].name);
      $(".modal-img").attr("src", "assets/img/" + pizzaList[i - 1].image);
   });
  }
  
  
});