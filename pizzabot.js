const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert("Hey! Happy to serve your pizza. On our menu we have " +  vegetarian + hawaiian + pepperoni)

function isOnMenue(order){
    return order == vegetarian || order == hawaiian || order == pepperoni;
} 

let orderCorrect = false;

let orderName = ""

while(!orderCorrect) {
    orderName = prompt("Enter the name of the pizza you want to order today\n Write Vegetarian Pizza, Hawaiian Pizza or Pepperoni Pizza");
    orderCorrect = isOnMenue(orderName);

    if (!orderCorrect) {
        alert("Error");
    }
}

let orderQuantity = (prompt(`you have chosen ${orderName}. How many of ${orderName} do you want?`))


let prise = pizzaPrice * orderQuantity;

let minutes;
if (orderQuantity<=2) {
    minutes = "The pizzas will take 10 minutes.";
  } else if (orderQuantity>=6) {
    minutes = "The pizzas will take 20 minutes.";
  } else {
    minutes = "The pizzas will take 15 minutes.";
  }

let time = (alert(` ${minutes} `))

let pizza = (alert(`Great, I'll get started on your ${orderName} right away, it will cost ${prise} kr`))









