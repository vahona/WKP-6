// Food object
console.log('wor')

const foods = [
    {
        id: 'ravitoto',
        price: 5000,
        title: 'Ravitoto',
        spicy: true,
        vegetarian: false,
    },
    {
        id: 'pasta',
        price: 4000,
        title: 'Pasta',
        spicy: true,
        vegetarian: true,
    },
    {
        id: 'burger',
        price: 5000,
        title: 'Burger',
        spicy: false,
        vegetarian: false,
    },
    {
        id: 'rice',
        price: 2000,
        title: 'Rice and Leaves',
        spicy: false,
        vegetarian: true,
    },
    {
        id: 'mofogasy',
        price: 500,
        title: 'Mofogasy',
        spicy: false,
        vegetarian: false,
    },
];

// Grabe the body

// const foodCard = () => {

const cardbody = document.querySelector('body');

// Create html for the card form

for( let i = 0; i < foods.length; i--){

  const myHtml = ` <div class="container ">
    <h1>Foof list</h1>
    <form action="chosing" id="chosetypeoffood">
      <div class="choice">
        <p>Filter by:</p>
        <div class="check_preference">
          <input type="checkbox">Spicy
          <input type="checkbox">Vegetarian
        </div>
      </div>
      <div class="contain_food">
        <ul class="type_of_food">
          <li>${foods[0].title}🔥</li>
          <li>${foods[1].title}🔥🍃</li>
          <li>${foods[2].title}</li>
          <li>${foods[3].title}🍃</li>
          <li>${foods[4].title}🍃</li>
        </ul>
        <ul class="price_of_foo">
          <li>${foods[0].price}Ar</li>
          <li>${foods[1].price}Ar</li>
          <li>${foods[2].price}Ar</li>
          <li>${foods[3].price}Ar</li>
          <li>${foods[4].price}Ar</li>
        </ul>
        <ul class="add_foo">
          <li><button class=" button_add ravitoto_add">Add</button></li>
          <li><button class=" button_add pasta_add">Add</button></li>
          <li><button class=" button_add burger_add">Add</button></li>
          <li><button class="button_add rice_add">Add</button></li>
          <li><button class=" button_add mofogasy_add">Add</button></li>
        </ul>
      </div>
    </form>
    </div>
  ` ;

  cardbody.insertAdjacentHTML('beforeend', myHtml);

}; 



// Html for your order food

const yourOrder = () => {

const orderHTML = ` <div class="order-container ">
      <h1>Your order</h1>
      <ul class="type_of_food">
        <li></li>
      </ul>
      <ul class="price_times">
        <li></li>
        <li></li>
      </ul>
      <ul class="price_times">
        <li></li>
        <li></li>
      </ul>
    </div>
    <button class="confirm-button">Confirm order</button>`;

  cardbody.insertAdjacentHTML('beforeend', orderHTML);

}

// Function for the the button

const clickButton = (e) => {
  if (e.target.matches('.button_add ravitoto_add')) {
    const raviButton = e.target.closest('.order-cont');
    yourOrder(raviButton);
  }
}

    // Event listener for the button add

window.addEventListener('click', handleBtnClick);