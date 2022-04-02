const listEl = document.querySelector('#grocery-list');
const shoppingCartEl = document.querySelector('#shopping-cart');
const fruits = ['Bananas', 'Apples', 'Oranges', 'Grapes', 'Blueberries'];

listEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.matches('button')) {
    const item = document.createElement('div');
    item.textContent = fruits[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});
