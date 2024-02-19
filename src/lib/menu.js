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
    image: 'onion-rings.png',
    name: 'Olympic Onion Rings',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
  {
    image: 'nachos.png',
    name: 'Knockout Nachos',
    description: '',
    price: '$7.99',
    serves: '2',
    options: null,
  },
  {
    image: 'fries.png',
    name: 'Fighter Fries',
    description: '',
    price: '$6.99',
    serves: '2',
    options: null,
  },
  {
    image: 'coleslaw.png',
    name: 'Coleslaw',
    description: '',
    price: '$8.99',
    serves: '2',
    options: null,
  },
  {
    image: 'tator-tots.png',
    name: 'Tackle Tator Tots',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
  {
    image: 'beet-chips.png',
    name: 'Beet Chips',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
  {
    image: 'battered-broccoli.png',
    name: 'Battered Broccoli',
    description: '',
    price: '$4.99',
    serves: '2',
    options: null,
  },
];

const entrees = [
  {
    image: 'steak.png',
    name: 'Steak',
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
    image: 'hamburger.png',
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
    image: 'chicken-sandwich.png',
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
    image: 'porkchop.png',
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
    image: 'ribs.png',
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
    image: 'salmon.png',
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
    image: 'wings.png',
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
    image: 'buffalo-chicken.png',
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
    image: 'caprese.png',
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
    image: 'ceaser.png',
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
    image: 'greek.png',
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
    image: 'steakhouse.png',
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
    image: 'taco.png',
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
    image: 'cobb.png',
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
    image: 'chicken-quesadilla.png',
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
    image: 'grilled-cheese.png',
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
    image: 'hotdog.png',
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
    image: 'nuggets.png',
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
    image: 'pbj.png',
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
    image: 'pizza.png',
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
    image: 'slider.png',
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
    image: 'URL_to_PopPulse_Soda_Image',
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
    image: 'URL_to_PopPulse_Soda_Image',
    name: 'Iced Tea',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: 'URL_to_PopPulse_Soda_Image',
    name: 'Lemonade',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
  {
    image: 'URL_to_PopPulse_Soda_Image',
    name: 'Smoothie',
    description:
      'A refreshing carbonated drink available in a variety of flavors.',
    price: '$1.99',
    serves: 1,
    options: null,
  },
];

export default { appetizers, entrees, salads, kids, drinks };
