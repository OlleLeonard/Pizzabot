const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert("Hey! Happy to serve your pizza. On our menu we have " +  vegetarian + ", " + hawaiian + ", " + pepperoni)

function checkOrderName(order) {
  return order === vegetarian || order === hawaiian || order === pepperoni;
}

function totalCost(price, quantity) {
  return price * quantity;
}

let orderCorrect = false;
let orderName = "";

while (!orderCorrect) {
  orderName = prompt("Enter the name of the pizza you want to order today\nWrite Vegetarian Pizza, Hawaiian Pizza, or Pepperoni Pizza");
  orderCorrect = checkOrderName(orderName);

  if (!orderCorrect) {
    alert("Thats not the correct pizza name! please enter " +  vegetarian + ", " + hawaiian + ", " + pepperoni);
  }
}

let orderQuantity = (prompt(`You have chosen ${orderName}. How many of ${orderName} do you want?`));

while (isNaN(orderQuantity)) {
  orderQuantity = (prompt("Thats not a number"));
}

let prise = totalCost(pizzaPrice, orderQuantity);

let minutes;

if (orderQuantity <= 2) {
  minutes = "The pizzas will take 10 minutes.";
} else if (orderQuantity >= 6) {
  minutes = "The pizzas will take 20 minutes.";
} else {
  minutes = "The pizzas will take 15 minutes.";
}

alert(`${minutes}`);
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${prise} kr`);