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

function Sizes(name, large, medium, small) {
  this.name = name;
  this.large = large;
  this.medium = medium;
  this.small = small;
}

const pizzaList = [
  new PizzaType("Chicken Mushroom", "pizza-chicken-mushroom.jpg"),
  new PizzaType("Pepperoni", "pizza-pepperoni.jpg"),
  new PizzaType("Hawaiian", "pizza-hawaiian.jpg"),
  new PizzaType("Margarita", "pizza-margarita.jpg"),
  new PizzaType("Salami", "pizza-salami.jpg"),
  new PizzaType("Seafood", "pizza-seafood.jpg")
];

const priceByTypeList = [
  new Sizes("Chicken Mushroom", 1280, 850, 600),
  new Sizes("Pepperoni", 1100, 850, 650),
  new Sizes("Hawaiian", 1200, 800, 550),
  new Sizes("Margarita", 850, 650, 400),
  new Sizes("Salami", 1300, 850, 650),
  new Sizes("Seafood", 1300, 850, 650)
];

const crustList = [
  new Crust("Regular", 0),
  new Crust("Crispy", 100),
  new Crust("Stuffed", 150),
  new Crust("Gluten-free", 200)
];

const toppingsList = [
  new Topping("Cheddar", 200),
  new Topping("Feta",200),
  new Topping("Green chilli",150),
  new Topping("Green pepper",150),
  new Topping("Jalapeno",150),
  new Topping("Mushroom",150),
  new Topping("Olives",150),
  new Topping("Onion",150),
  new Topping("Pineapple",150),
  new Topping("Salami",150),
  new Topping("Tikka sauce",100),
  new Topping("Peri-peri sauce",100),
];

let cartItem = [];
let selectedToppings = [];

//user-interface logic
$(document).ready(function() {
  let selectedSize;
  let selectedType;
  let typeCost;
  let toppingCost = 0;
  for(let i = 1; i < 7; i++) {
    $("#menu-item-" + i).click(function() {
      $("#pizza-type").text(pizzaList[i - 1].name);
      $(".modal-img").attr("src", "assets/img/" + pizzaList[i - 1].image);
      selectedSize = $("input[name=sizeRadio]:checked").val();
      typeCost = priceByTypeList[i - 1][selectedSize];
      selectedType = pizzaList[i - 1].name;
      let selectedCrust = $("input[name=crustRadio]:checked").val();
      let crustCost = crustList[selectedCrust].price;
      $("#total-price").text(typeCost + crustCost);
      $("input[name=sizeRadio]").change(function() {
        selectedSize = $(this).val();
        typeCost = priceByTypeList[i - 1][selectedSize];
        $("#total-price").text(typeCost + crustCost);
      });
      
      
      $("input[name=crustRadio]").change(function() {
        selectedCrust = $(this).val();
        crustCost = crustList[selectedCrust].price;
        $("#total-price").text(typeCost + crustCost);
      });
      
      //let toppingsChecked = false;
      $("input[type=checkbox]").change(function() {
        if ($(this).prop("checked")) {
          checkedTopping = $(this).val();
          selectedToppings.push(toppingsList[checkedTopping]);
          //toppingCost = toppingsList[checkedTopping].price;
          toppingCost = 0;
        }

        selectedToppings.forEach(function(selectedTopping) {
          toppingCost = toppingCost + selectedTopping.price;
          
        });
        console.log(toppingCost);
      });

    });
    
  }
  
  
});