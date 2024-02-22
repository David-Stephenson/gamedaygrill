// Dont directly export these
const doneness = [
  'Blue',
  'Rare',
  'Medium Rare',
  'Medium',
  'Medium Well',
  'Well Done',
];

const sides = [
  'French Fries',
  'Macaroni and Cheese',
  'Garden Salad',
  'Mozzarella Sticks',
  'Corn on the Cob',
  'Baked Beans',
];

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
    description:
      'A triumph of flavor and crunch! Picture thick, sweet onions coated in a golden batter, seasoned with a blend of zesty spices and a hint of sweetness.',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/appetizers/nachos.png',
    name: 'Knockout Nachos',
    description:
      'A flavor-packed explosion of crispy tortilla chips, generously layered with melted cheese, zesty salsa, and creamy guacamole.',
    price: '$7.99',
    options: null,
  },
  {
    image: '/images/menu/appetizers/fries.png',
    name: 'Fighter Fries',
    description:
      'These fries are a powerhouse of flavor, boasting a golden exterior that crunches with each bite, revealing a fluffy, potato center.',
    price: '$6.99',
    options: null,
  },
  {
    image: '/images/menu/appetizers/coleslaw.png',
    name: 'Curling Coleslaw',
    description:
      'Crisp, shredded cabbage and carrots, tossed in a creamy, tangy dressing. A refreshing blend of textures and flavors, making it the perfect side.',
    price: '$8.99',
    options: null,
  },
  {
    image: '/images/menu/appetizers/tator-tots.png',
    name: 'Tackle Tator Tots',
    description:
      'These tots are a gridiron delight, with a crispy exterior that crunches with each bite, giving way to a soft, potatoey center. Seasoned to perfection with a savory blend of spices, they are the MVP of any game-day spread.',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/appetizers/beet-chips.png',
    name: 'Batting Beet Chips',
    description:
      'These chips offer a vibrant explosion of flavor, featuring thin slices of earthy beets roasted to crispy perfection. Seasoned lightly with sea salt or herbs, they are a wholesome snack that packs a punch of nutrition and taste.',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/appetizers/battered-broccoli.png',
    name: 'Battered Broccoli',
    description:
      '"Experience the crunch with our Battered Broccoli: tender florets wrapped in a crispy, seasoned batter. A perfect harmony of garden freshness and savory delight!"',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/appetizers/cheese-curds.png',
    name: 'Captain Cheese Curds',
    description:
      'Golden and gooey, these bites offer a delightful crunch on the outside with a melt-in-your-mouth center, perfectly seasoned for a cheesy indulgence.',
    price: '$4.99',
    options: null,
  },
];

const entrees = [
  {
    image: '/images/menu/entrees/steak.png',
    name: 'Sudden Death Steak',
    description:
      "Get in the game with our Sirloin Supreme! A champion cut, expertly seared for a robust flavor that's always a crowd-pleaser.",
    price: '$4.99',
    options: [
      {
        name: 'Doneness',
        selectMax: 2,
        choices: doneness,
      },
      { name: 'Sides', selectMax: 1, choices: sides },
    ],
  },
  {
    image: '/images/menu/entrees/hamburger.png',
    name: 'Half-time Hamburger',
    description:
      'Juicy, grilled to perfection, and nestled between a soft, toasted bun. Topped with fresh lettuce, ripe tomatoes, and a hint of sauce for a classic taste sensation.',
    price: '$4.99',
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
    name: "Coach's Chicken Sandwich",
    description:
      'Crispy on the outside, tender on the inside chicken breast, topped with fresh greens and a creamy sauce, all encased in a soft, toasted bun for a satisfying bite.',
    price: '$4.99',
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
    name: 'Penalty Porkchop',
    description:
      'Tender and succulent, expertly seasoned and seared to lock in the flavors. Served with a hint of herbs for a mouthwatering experience.',
    price: '$4.99',
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
    name: 'Rifle Ribs',
    description:
      'Slow-cooked to fall-off-the-bone perfection, these ribs are glazed in a smoky, sweet barbecue sauce, offering a rich, finger-licking good flavor.',
    price: '$4.99',
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
    name: 'Soccer Salmon',
    description:
      'Delicately seasoned and perfectly grilled, this salmon fillet boasts a flaky texture and a rich, buttery flavor, complemented by a light, citrusy glaze.',
    price: '$4.99',
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
    name: 'Wild Card Wings',
    description:
      'Crispy on the outside, juicy on the inside, tossed in your choice of savory sauces for a flavor-packed bite.',
    price: '$4.99',
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
    name: 'Game Day Grilled Chicken',
    description:
      'Marinated and grilled to perfection, this chicken is infused with a blend of spices, offering a smoky, tender delight with every bite.',
    price: '$4.99',
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
    name: 'Ball Boy Buffalo Chicken',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/salads/caprese.png',
    name: 'Clutch Caprese Salad',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/salads/ceaser.png',
    name: 'Fencing Ceaser Salad',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/salads/greek.png',
    name: 'Olympic Greek Salad',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/salads/steakhouse.png',
    name: 'Strength Steakhouse Salad',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/salads/taco.png',
    name: 'Timeout Taco Salad',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/salads/cobb.png',
    name: 'Cobb Salad',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/salads/orzo.png',
    name: 'Orzo Salad',
    description: '',
    price: '$4.99',
    options: null,
  },
];

const kids = [
  {
    image: '/images/menu/kids/chicken-quesadilla.png',
    name: 'Chicken Quesadilla',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/kids/grilled-cheese.png',
    name: 'Grilled Cheese',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/kids/hotdog.png',
    name: 'Hotdog',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/kids/nuggets.png',
    name: 'Chicken Nuggets',
    description: '',
    price: '$4.99',
    options: null,
  },
  {
    image: '/images/menu/kids/pbj.png',
    name: 'Peanut Butter and Jelly',
    description: '',
    price: '$4.99',
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
    options: null,
  },
  {
    image: '/images/menu/kids/fish-sticks.png',
    name: 'Fish Sticks',
    description: '',
    price: '$4.99',
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
    options: null,
  },
  {
    image: '/images/menu/drinks/lemonade.png',
    name: 'Lemonade',
    description:
      'A refreshing sweet and sour lemonade, perfect to pair with a meal.',
    price: '$1.99',
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
    options: null,
  },
  {
    image: '/images/menu/drinks/hot-chocolate.png',
    name: 'Hot Chocolate',
    description:
      'A delicious beverage, perfect to enjoy in cold weather. (Or year-round, no judgements.)',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/drinks/apple-cider.png',
    name: 'Apple Cider',
    description: 'Our specialty sweet, delicious berry smoothie made in-house.',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/drinks/arnold-palmer.png',
    name: 'Iced Tea Lemonade',
    description: 'Our specialty sweet, delicious berry smoothie made in-house.',
    price: '$1.99',
    options: null,
  },
];

const desserts = [
  {
    image: '/images/menu/desserts/apple-pie.png',
    name: 'Apple Pie',
    description: 'A classic dessert made with fresh apples and a flaky crust.',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/desserts/banoffee-pie.png',
    name: 'Banoffee Pie',
    description:
      'A banana-caramel pie served with a scoop of vanilla ice cream.',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/desserts/brownie-sundae.png',
    name: 'Brownie Sundae',
    description:
      'A nice vanilla sundae with brownie bits mixed in.  Topped with chocolate syrup.',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/desserts/cheese-cake.png',
    name: 'New York Cheesecake',
    description:
      'A classic New York cheesecake topped with raspberries and strawberry sauce.',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/desserts/lava-cake.png',
    name: 'Lava Cake',
    description: 'A chocolate cake topped with hot chocolate syrup.',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/desserts/strawberry-cake.png',
    name: 'Strawberry Cake',
    description:
      'Our classic vanilla-strawberry cake topped with strawberry jam.',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/desserts/icecream.png',
    name: 'Ice Cream Scoops',
    description:
      'A single scoop of ice cream available in a variety of flavors.',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/desserts/oreo-cupcake.png',
    name: 'Orea Cupcake',
    description: 'A rich Orea cupcake to scratch your sweet tooth.',
    price: '$1.99',
    options: null,
  },
];

const alcohol = [
  {
    image: '/images/menu/alcohol/beer.png',
    name: 'Draft Beer',
    description: '',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/alcohol/hard-seltzer.png',
    name: 'Hard Seltzer',
    description: '',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/alcohol/spiked-cranberry.png',
    name: 'Spiked Cranberry Juice',
    description: '',
    price: '$1.99',
    options: null,
  },
  {
    image: '/images/menu/alcohol/cola-rum.png',
    name: 'Cola and Rum',
    description: '',
    price: '$1.99',
    options: null,
  },
];

const popular_now = [entrees[3], appetizers[2], entrees[0], appetizers[6]];

export { popular_now };

export default { appetizers, entrees, salads, kids, drinks, desserts, alcohol };
