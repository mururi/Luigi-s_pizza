//business logic
function PizzaType(name, image) {
  this.name = name;
  this.image = image;
}

function Crust(name, price) {
  this.name = name;
  this.price = price;
}

function Topping(name, price) {
  this.name = name;
  this.price = price;
}

const pizzaList = [
  new PizzaType("Chicken Mushroom", "pizza-chicken-mushroom.jpg"),
  new PizzaType("Pepperoni", "pizza-pepperoni.jpg"),
  new PizzaType("Hawaiian", "pizza-hawaiian.jpg"),
  new PizzaType("Margarita", "pizza-margarita.jpg"),
  new PizzaType("Salami", "pizza-salami.jpg"),
  new PizzaType("Seafood", "pizza-seafood.jpg")
];

const crustList = [
  new Crust("Regular", "0"),
  new Crust("Crispy", "100"),
  new Crust("Stuffed", "150"),
  new Crust("Gluten-free", "200")
];

const toppingsList = [
  new Topping("Cheddar", "200"),
  new Topping("Feta","200"),
  new Topping("Green chilli","150"),
  new Topping("Green pepper","150"),
  new Topping("Jalapeno","150"),
  new Topping("Mushroom","150"),
  new Topping("Olives","150"),
  new Topping("Onion","150"),
  new Topping("Pineapple","150"),
  new Topping("Salami","150"),
  new Topping("Tikka sauce","100"),
  new Topping("Peri-peri sauce","100"),
];

//user-interface logic
$(document).ready(function() {
  for(let i = 1; i < 7; i++) {
    $("#menu-item-" + i).click(function() {
      $("#pizza-type").text(pizzaList[i - 1].name);
      $(".modal-img").attr("src", "assets/img/" + pizzaList[i - 1].image);
      let selectedType = 
   });
  }
  
  
});