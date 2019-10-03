/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function createMenu(arr) {
  // get header to use to attach menu
  const header = document.querySelector('.header');

  // create div and ul
  const menu = document.createElement('div');
  const unorderedList = document.createElement('ul');

  // attach menu to header and ul to menu
  header.appendChild(menu);
  menu.appendChild(unorderedList);

  // iterate over the array creating a li for each item in the list
  arr.forEach(function(item) {
    const newLi = document.createElement('li');
    unorderedList.appendChild(newLi);
    newLi.textContent = item;
  });

  // add class to menu
  menu.classList.add('menu');

  // select menu button
  let menuBtn = document.querySelector('.menu-button');

  // add event listener to button
  menuBtn.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
  })

  return menu;
}

createMenu(menuItems);

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
