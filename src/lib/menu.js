// Dont directly export these

const doneness = [
  'Blue',
  'Rare',
  'Medium Rare',
  'Medium',
  'Medium Well',
  'Well Done',
];

const sides = ['Mashed Potatos', ' Fries', 'Mac and Cheese'];
const kids_sides = [
  'Apple Slices',
  'Mashed Potatos',
  'Mac and Cheese',
  'Fries',
  'Strawberry Yogurt',
  'Bowl of fruit',
];

// Export these

const appetizers = [
  {
    image: '/images/menu/appetizers/onion-rings.png',
    name: 'Olympic Onion Rings',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
  {
    image: '/images/menu/appetizers/nachos.png',
    name: 'Knockout Nachos',
    description: '',
    price: '$7.99',
    serves: '2',
    options: null,
  },
  {
    image: '/images/menu/appetizers/fries.png',
    name: 'Fighter Fries',
    description: '',
    price: '$6.99',
    serves: '2',
    options: null,
  },
  {
    image: '/images/menu/appetizers/coleslaw.png',
    name: 'Coleslaw',
    description: '',
    price: '$8.99',
    serves: '2',
    options: null,
  },
  {
    image: '/images/menu/appetizers/tator-tots.png',
    name: 'Tackle Tator Tots',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
  {
    image: '/images/menu/appetizers/beet-chips.png',
    name: 'Beet Chips',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
  {
    image: '/images/menu/appetizers/battered-broccoli.png',
    name: 'Battered Broccoli',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
  {
    image: '/images/menu/appetizers/cheese-curds.png',
    name: 'Fried Cheese Curds',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
];

const entrees = [
  {
    image: '/images/menu/entrees/steak.png',
    name: 'Steak',
    description:
      "Get in the game with our Sirloin Supreme! A champion cut, expertly seared for a robust flavor that's always a crowd-pleaser.",
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        choices: doneness,
      },
      { name: 'Sides', choices: sides },
    ],
  },
  {
    image: '/images/menu/entrees/hamburger.png',
    name: 'Hamburger',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/entrees/chicken-sandwich.png',
    name: 'Chicken Sandwich',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/entrees/porkchop.png',
    name: 'Porkchop',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/entrees/ribs.png',
    name: 'Ribs',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/entrees/salmon.png',
    name: 'Salmon',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/entrees/wings.png',
    name: 'Wings',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/entrees/grilled-chicken.png',
    name: 'Grilled Chicken',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
];

const salads = [
  {
    image: '/images/menu/salads/buffalo-chicken.png',
    name: 'Buffalo Chicken',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/salads/caprese.png',
    name: 'Caprese Salad',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/salads/ceaser.png',
    name: 'Ceaser Salad',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/salads/greek.png',
    name: 'Greek Salad',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/salads/steakhouse.png',
    name: 'Steakhouse Salad',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/salads/taco.png',
    name: 'Taco Salad',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/salads/cobb.png',
    name: 'Cobb Salad',
    description: '',
    price: '$4.99',
    serves: '1',
    options: [
      {
        name: 'Doneness',
        options: doneness,
      },
      { name: 'Sides', options: sides },
    ],
  },
  {
    image: '/images/menu/salads/orzo.png',
    name: 'orzo Salad',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
];

const kids = [
  {
    image: '/images/menu/kids/chicken-quesadilla.png',
    name: 'Chicken Quesadilla',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
  {
    image: '/images/menu/kids/grilled-cheese.png',
    name: 'Grilled Cheese',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
  {
    image: '/images/menu/kids/hotdog.png',
    name: 'Hotdog',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
  {
    image: '/images/menu/kids/nuggets.png',
    name: 'Chicken Nuggets',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
  {
    image: '/images/menu/kids/pbj.png',
    name: 'Peanut Butter and Jelly',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
  {
    image: '/images/menu/kids/pizza.png',
    name: 'Cheese Pizza',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
  {
    image: '/images/menu/kids/slider.png',
    name: 'Sliders',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
  {
    image: '/images/menu/kids/fish-sticks.png',
    name: 'Fish Sticks',
    description: '',
    price: '$4.99',
    serves: '1',
    options: null,
  },
];

const drinks = [
  {
    image: '/images/menu/drinks/soda.png',
    name: 'PopPulse Soda',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: [
      {
        name: 'Flavor',
        choices: [
          'Cola',
          'Diet Cola',
          'Lemon and Lime',
          'Root Beer',
          'Citizen Pepper',
        ],
      },
      { name: 'Size', options: ['Small', 'Medium', 'Large'] },
    ],
  },
  {
    image: '/images/menu/drinks/iced-tea.png',
    name: 'Iced Tea',
    description:
      'A nice, cold refreshing tea.  Available sweetened or unsweetened.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/lemonade.png',
    name: 'Lemonade',
    description:
      'A refreshing sweet and sour lemonade, perfect to pair with a meal.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/smoothie.png',
    name: 'Berry Smoothie',
    description: 'Our specialty sweet, delicious berry smoothie made in-house.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/coffee.png',
    name: 'Coffee',
    description:
      'Get back in the game with a smooth, energizing cup of our house blend coffee.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/hot-chocolate.png',
    name: 'Hot Chocolate',
    description:
      'A delicious beverage, perfect to enjoy in cold weather. (Or year-round, no judgements.)',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/apple-cider.png',
    name: 'Apple Cider',
    description: 'Our specialty sweet, delicious berry smoothie made in-house.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/arnold-palmer.png',
    name: 'Iced Tea Lemonade',
    description: 'Our specialty sweet, delicious berry smoothie made in-house.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
];

const alcohol = [
  {
    image: '/images/menu/drinks/hot-chocolate.png',
    name: 'Bla',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
];

const desserts = [
  {
    image: '/images/menu/desserts/apple-pie.png',
    name: 'Apple Pie',
    description: 'A classic dessert made with fresh apples and a flaky crust.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/desserts/banoffee-pie.png',
    name: 'Banoffee Pie',
    description:
      'A banana-caramel pie served with a scoop of vanilla ice cream.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/desserts/brownie-sundae.png',
    name: 'Brownie Sundae',
    description:
      'A nice vanilla sundae with brownie bits mixed in.  Topped with chocolate syrup.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/desserts/cheese-cake.png',
    name: 'New York Cheesecake',
    description:
      'A classic New York cheesecake topped with raspberries and strawberry sauce.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/desserts/lava-cake.png',
    name: 'Lava Cake',
    description: 'A chocolate cake topped with hot chocolate syrup.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/desserts/strawberry-cake.png',
    name: 'Strawberry Cake',
    description:
      'Our classic vanilla-strawberry cake topped with strawberry jam.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/desserts/icecream.png',
    name: 'Ice Cream Scoops',
    description:
      'A single scoop of ice cream available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/desserts/oreo-cupcake.png',
    name: 'Orea Cupcake',
    description: 'A rich Orea cupcake to scratch your sweet tooth.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
];

const popular_now = [entrees[3], entrees[1], entrees[0], appetizers[6]];

export { popular_now };

export default { appetizers, entrees, salads, kids, drinks, desserts, alcohol };
