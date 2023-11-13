function myFunction() {
    var x = document.getElementById("nameScreen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("helloScreen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction5() {
    var x = document.getElementById("pizzaScreen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction3() {
    var x = document.getElementById("myText").value;
    document.getElementById("firstname").innerHTML = x;
  }

  function myFunction4() {
    var x = document.getElementById("myText1").value;
    document.getElementById("lastname").innerHTML = x;
  }


const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

document.getElementById("3pizza").innerHTML = "Happy to serve your pizza!";
document.getElementById("31pizza").innerHTML = "On our menu we have ";
document.getElementById("32pizza").innerHTML = "" +  vegetarian + ", " + hawaiian + ", " + pepperoni;


function myFunction6() {
  var x = document.getElementById("SelectScreen");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myFunction7() {
  var x = document.getElementById("timeScreen");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction8() {
  var x = document.getElementById("greateScreen");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const pizzaPrice = 80;

function totalCost(price, quantity) {
  return price * quantity;
}

const form = document.getElementById('pizzaOrderForm');
const response1 = document.getElementById('response1');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const orderName = form.pizzaType.value;
  const orderQuantity = parseInt(form.quantity.value);

  if (isNaN(orderQuantity)) {
    response1.innerHTML = '<p>Invalid quantity. Please enter a valid number.</p>';
    return;
  }

  let minutes;

  if (orderQuantity <= 2) {
    minutes = 'The pizzas will take 10 minutes.';
  } else if (orderQuantity >= 6) {
    minutes = 'The pizzas will take 20 minutes.';
  } else {
    minutes = 'The pizzas will take 15 minutes.';
  }

  const prise = totalCost(pizzaPrice, orderQuantity);

  response1.innerHTML = `<p>${minutes}</p>`;
  const response2 = document.getElementById('response2');
  response2.innerHTML = '';
  response2.innerHTML += `<p>We'll get started on your ${orderName} right away. It will cost ${prise} kr.</p>`;
});


function myFunction9() {
  var x = document.getElementById("greenButt");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

function myFunction11() {
  var x = document.getElementById("greatestButt");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

function myFunction10() {
  var pizzaType = document.getElementById("pizzaType").value;

  var veggieDiv = document.getElementById("pizzaFinished");
  var hawaiiDiv = document.getElementById("pizzaFinished2");
  var pepperoniDiv = document.getElementById("pizzaFinished3");


  veggieDiv.style.display = "none";
  hawaiiDiv.style.display = "none";
  pepperoniDiv.style.display = "none";

  if (pizzaType === "Vegetarian") {
    veggieDiv.style.display = "block";
  } else if (pizzaType === "Hawaiian") {
    hawaiiDiv.style.display = "block";
  } else if (pizzaType === "Pepperoni") {
    pepperoniDiv.style.display = "block";
  }
}

