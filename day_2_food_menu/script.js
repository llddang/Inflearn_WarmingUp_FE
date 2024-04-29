const menus = [
  {type: 0, img: 'images/0_croissant.jpeg', name: 'Croissant', value: '4000원'},
  {type: 0, img: 'images/0_french_toast.jpeg', name: 'French Toast', value: '6000원'},
  {type: 0, img: 'images/0_scone.jpeg', name: 'Scone', value: '3000원'},
  {type: 1, img: 'images/1_hawls_meal.jpeg', name: 'Hawl\'s Meal', value: '7000원'},
  {type: 1, img: 'images/1_pancakes.jpeg', name: 'Pancakes', value: '8000원'},
  {type: 1, img: 'images/1_salmon_bagel.jpeg', name: 'Salmon Bagel', value: '5000원'},
  {type: 2, img: 'images/2_chicken.jpeg', name: 'Chicken', value: '28000원'},
  {type: 2, img: 'images/2_pork_ribs.jpeg', name: 'Pork Ribs', value: '15000원'},
  {type: 2, img: 'images/2_steak.jpeg', name: 'Steak', value: '45000원'},
  {type: 3, img: 'images/3_highball.jpeg', name: 'Highball', value: '7000원'},
  {type: 3, img: 'images/3_milk_shake.jpeg', name: 'Milk Shake', value: '3500원'},
  {type: 3, img: 'images/3_zero_coke.jpeg', name: 'Zero Coke', value: '2000원'},
]

const allBtn = document.querySelector('#all');
const breakfastBtn = document.querySelector('#breakfast');
const lunchBtn = document.querySelector('#lunch');
const dinerBtn = document.querySelector('#diner');
const drinksBtn = document.querySelector('#drinks');

allBtn.addEventListener('click', () => {
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = "";

  menus.forEach(item => {
    const card = createCard(item);
    menuList.appendChild(card);
  })
})

breakfastBtn.addEventListener('click', () => {
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = "";

  menus.filter(item => item.type === 0).forEach(item => {
    const card = createCard(item);
    menuList.appendChild(card);
  })
})

lunchBtn.addEventListener('click', () => {
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = "";

  menus.filter(item => item.type === 1).forEach(item => {
    const card = createCard(item);
    menuList.appendChild(card);
  })
})

dinerBtn.addEventListener('click', () => {
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = "";

  menus.filter(item => item.type === 2).forEach(item => {
    const card = createCard(item);
    menuList.appendChild(card);
  })
})

drinksBtn.addEventListener('click', () => {
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = "";

  menus.filter(item => item.type === 3).forEach(item => {
    const card = createCard(item);
    menuList.appendChild(card);
  })
})

function createCard(item) {
  const card = document.createElement('div');
  card.className = 'menuCard';
  card.innerHTML = `<img src="${item.img}" class="menuImg"/>
  <div class="menuContent">
    <div class="menuHead">
      <span style="font-weight: bold;">${item.name}</span>
      <span style="color: #B9E0FD;">${item.value}</span>
    </div>
    <span style="padding-top: 16px;">
      The kipferl, an Austrian crescent-shaped pastry, can be dated back to at least the 13th century in Austria, and came in various shapes
    </span>
  </div>`

  return card;
}