let n = prompt("Number of pizzas");
n -= 1;
let order = prompt("Your order");
function orderingPizza(order, n) {
  let pizzas = ["Pizza with mushrooms", "Pizza with chicken and pinapple"];
  let str = "Your order:";
  if (n == 0) {
    str += pizzas[order] + " " + 2;
    alert(str);
  } else if (isNaN(n) || isNaN(order)) {
    alert("input number");
  } else {
    n += 1;
    str += pizzas[order] + " " + n;
    alert(str);
  }
}
orderingPizza(order, n);
