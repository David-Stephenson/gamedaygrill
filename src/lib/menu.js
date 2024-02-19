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
  'Mac and CHeese',
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
        options: doneness,
      },
      { name: 'Sides', options: sides },
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
];

const kids = [
  {
    image: '/images/menu/kids/chicken-quesadilla.png',
    name: 'Chicken Quesadilla',
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
    image: '/images/menu/kids/grilled-cheese.png',
    name: 'Grilled Cheese',
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
    image: '/images/menu/kids/hotdog.png',
    name: 'Hotdog',
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
    image: '/images/menu/kids/nuggets.png',
    name: 'Chicken Nuggets',
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
    image: '/images/menu/kids/pbj.png',
    name: 'Peanut Butter and Jelly',
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
    image: '/images/menu/kids/pizza.png',
    name: 'Cheese Pizza',
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
    image: '/images/menu/kids/slider.png',
    name: 'Sliders',
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
        options: [
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
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/lemonade.png',
    name: 'Lemonade',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/smoothie.png',
    name: 'Berry Smoothie',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/coffee.png',
    name: 'Coffee',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: '/images/menu/drinks/hot-chocolate.png',
    name: 'Hot Chocolate',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
];

const popular_now = [
  entrees[3],
  entrees[1],
  entrees[0],
  appetizers[5],
  entrees[6],
];

export { popular_now };

export default { appetizers, entrees, salads, kids, drinks };
