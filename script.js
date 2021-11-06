let n = prompt("Number of pizzas");
let order = prompt("Your order");
function orderingPizza(order, n) {
  let pizzas = ["Pizza with mushrooms", "Pizza with chicken and pinapple"];
  let str = "Your order:";
  if (n == 0) {
    if (order == 0) {
      str += pizzas[1] + " " + 1;
      alert(str);
    } else {
      str += pizzas[order] + " " + 1;
      alert(str);
    }
  } else if (isNaN(n) || isNaN(order)) {
    alert("input number");
  } else if (order > 1) {
    alert("input another number");
  } else {
    str += pizzas[order] + " " + n;
    alert(str);
  }
}
orderingPizza(order, n);
