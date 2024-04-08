export function menuContent() {
  const matchaDesc = 'A delicious pairing of our ceremonial-grade matcha and steamed milk. Available hot or iced.';
  const teaDesc = 'A wonderfully refreshing iced tea with lemongrass, honey, lime, and sugarcane.';
  const dayDishDesc = 'Savory, filling udon noodles with chicken soup and pork dumplings. Served with rice and a dill chili soy dipping sauce.';
  const greatDishDesc = 'Oh my gosh it is so delicious seriously you have to try it. Trust me bro.';
  const iceCreamDesc = 'For dessert, we have a variety of ice cream flavors. Vanilla, Chocolate, Strawberry, Cookies and Cream, Chocolate Chip Cookie Dough, and Blueberry Walnut Pie.';

  const content = document.createElement('div');
  content.classList.add('content');

  const drinksDivider = createDivider('Drinks');
  const mainsDivider = createDivider('Mains');
  const dessertDivider = createDivider('Dessert');

  const matcha = createItem('Matcha Latte', matchaDesc, '5€');
  const tea = createItem('Lemongrass Honey Tea', teaDesc, '5€');

  const dayDish = createItem("Chloé's Dish of the Day", dayDishDesc, '5€');
  const greatDish = createItem('Something Great', greatDishDesc, '5€');

  const iceCream = createItem('Ice cream', iceCreamDesc, '5€');

  content.appendChild(drinksDivider);
  content.appendChild(matcha);
  content.appendChild(tea);

  content.appendChild(mainsDivider);
  content.appendChild(dayDish);
  content.appendChild(greatDish);

  content.appendChild(dessertDivider);
  content.appendChild(iceCream);

  return content;
}
function createDivider(title) {
  const divider = document.createElement('div');
  divider.classList.add('card', 'divider');

  const header = document.createElement('h1');
  header.textContent = title;
  divider.appendChild(header);

  return divider;
}
function createItem(name, description, price) {
  const item = document.createElement('div');
  item.classList.add('card', 'item');

  const h3 = document.createElement('h3');
  h3.textContent = name;
  item.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = description;
  item.appendChild(p);

  const h4 = document.createElement('h4');
  h4.textContent = price;
  item.appendChild(h4);

  return item;
}
