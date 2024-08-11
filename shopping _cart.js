let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning if it's not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' to the end if it's not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey' if you are allergic to it
const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
