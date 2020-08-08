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

const cardbody = document.querySelector('body');

// Create html for the card form

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
          <li>Ravitoto🔥</li>
          <li>Pasta🔥🍃</li>
          <li>Burger</li>
          <li>Rice and leaves🍃</li>
          <li>Mofogasy🍃</li>
        </ul>
        <ul class="price_of_foo">
          <li>5000Ar</li>
          <li>4000Ar</li>
          <li>5000Ar</li>
          <li>2000Ar</li>
          <li>500Ar</li>
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


