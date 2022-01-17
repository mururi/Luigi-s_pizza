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

function CartItem(name, size, crust, toppings, quantity, totalCost) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
  this.totalCost = totalCost;
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

let cartItems = [];

//user-interface logic
$(document).ready(function() {
  

  for(let i = 1; i < 7; i++) {
    $("#menu-item-" + i).click(function() {
      let selectedSize;
      let selectedType;
      let selectedCrust;
      let typeCost;
      let crustCost;
      let toppingCost = 0;
      let quantity;
      let selectedToppings = [];

      //set corresponding image and title on modal
      $("#pizza-type").text(pizzaList[i - 1].name);
      $(".modal-img").attr("src", "assets/img/" + pizzaList[i - 1].image);
      
      selectedSize = $("input[name=sizeRadio]:checked").val();
      typeCost = priceByTypeList[i - 1][selectedSize];
      selectedType = pizzaList[i - 1].name;

      selectedCrust = $("input[name=crustRadio]:checked").val();
      crustCost = crustList[selectedCrust].price;

      quantity = $("#quantity").val();

      $("#total-price").text((typeCost + crustCost + toppingCost) * quantity);
      
      //check if the size changes
      $("input[name=sizeRadio]").change(function() {
        selectedSize = $(this).val();
        typeCost = priceByTypeList[i - 1][selectedSize];
        $("#total-price").text((typeCost + crustCost + toppingCost) * quantity);
      });
      
      //check if the crust changes
      $("input[name=crustRadio]").change(function() {
        selectedCrust = $(this).val();
        crustCost = crustList[selectedCrust].price;
        $("#total-price").text((typeCost + crustCost + toppingCost) * quantity);
      });
      
      //check if toppings have been added
      $("input[type=checkbox]").change(function() {
        toppingCost = 0; //reset topping cost every time there's a change
        if ($(this).prop("checked")) {
          checkedTopping = $(this).val();
          selectedToppings.push(toppingsList[checkedTopping]);
          selectedToppings.forEach(function(selectedTopping) {
            toppingCost = toppingCost + selectedTopping.price;  
          });
        }
        $("#total-price").text((typeCost + crustCost + toppingCost) * quantity);
        
      });

      //check if the quantity has changed
      $("#quantity").change(function() {
        quantity = $(this).val();
        $("#total-price").text((typeCost + crustCost + toppingCost) * quantity);
      });

      //add item to cart
      $("#addToCart").click(function() {
        let totalCost = (typeCost + crustCost + toppingCost) * quantity;
        let cartObject = new CartItem(selectedType, selectedSize, crustList[selectedCrust].name, selectedToppings, quantity, totalCost);
        cartItems.push(cartObject);
        console.log(cartItems);
      });
      
      //cartItems.push(new CartItem())
    });
    
  }
  
  
});