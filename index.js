var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item = new Object({itemName: item, itemPrice: price})
 return `${item} has been added to your cart.`
}

function viewCart() {
  for (let i = 0; i < cart.length; i++) {
    return `In your cart, you have ${item[0] at ${price[0] and}`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
