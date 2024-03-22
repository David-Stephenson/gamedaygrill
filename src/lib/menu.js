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
  'Bowl of Fruit',
];

const cup_sizes = ['Small', 'Medium', 'Large'];

// Export these

const appetizers = {
  name: 'Warmups',
  realName: 'Appetizers',
  items: [
    {
      image: '/images/menu/appetizers/onion-rings',
      name: 'Olympic Onion Rings',
      description:
        'A triumph of flavor and crunch! Picture thick, sweet onions coated in a golden batter, seasoned with a blend of zesty spices and a hint of sweetness.',
      price: '3.99',
      options: null,
    },
    {
      image: '/images/menu/appetizers/nachos',
      name: 'Knockout Nachos',
      description:
        'A flavor-packed explosion of crispy tortilla chips, generously layered with melted cheese, zesty salsa, creamy guacamole, and your choice of meat.',
      price: '6.99',
      options: [
        {
          name: 'Meat',
          selectMax: 1,
          choices: ['Beef', 'Pork', 'Chicken'],
        },
      ],
    },
    {
      image: '/images/menu/appetizers/fries',
      name: 'Fighter Fries',
      description:
        'These fries are a powerhouse of flavor, boasting a golden exterior that crunches with each bite, revealing a fluffy, potato center.',
      price: '4.99',
      options: null,
    },
    {
      image: '/images/menu/appetizers/coleslaw',
      name: 'Curling Coleslaw',
      description:
        'Crisp, shredded cabbage and carrots, tossed in a creamy, tangy dressing. A refreshing blend of textures and flavors, making it the perfect side.',
      price: '2.99',
      options: null,
    },
    {
      image: '/images/menu/appetizers/tator-tots',
      name: 'Tackle Tator Tots',
      description:
        'These tots are a gridiron delight, with a crispy exterior that crunches with each bite, giving way to a soft, potatoey center. Seasoned to perfection with a savory blend of spices, they are the MVP of any game-day spread.',
      price: '4.99',
      options: null,
    },
    {
      image: '/images/menu/appetizers/beet-chips',
      name: 'Batting Beet Chips',
      description:
        'These chips offer a vibrant explosion of flavor, featuring thin slices of earthy beets roasted to crispy perfection. Seasoned lightly with sea salt or herbs, they are a wholesome snack that packs a punch of nutrition and taste.',
      price: '2.99',
      options: null,
    },
    {
      image: '/images/menu/appetizers/battered-broccoli',
      name: 'Battered Broccoli',
      description:
        '"Experience the crunch with our Battered Broccoli: tender florets wrapped in a crispy, seasoned batter. A perfect harmony of garden freshness and savory delight!"',
      price: '3.99',
      options: null,
    },
    {
      image: '/images/menu/appetizers/cheese-curds',
      name: 'Captain Cheese Curds',
      description:
        'Golden and gooey, these bites offer a delightful crunch on the outside with a melt-in-your-mouth center, perfectly seasoned for a cheesy indulgence.',
      price: '4.99',
      options: null,
    },
  ],
};

const entrees = {
  name: 'Major Leauge',
  realName: 'Entrees',
  items: [
    {
      image: '/images/menu/entrees/steak',
      name: 'Sudden Death Steak',
      description:
        "Get in the game with our Sirloin Supreme! A champion cut, expertly seared for a robust flavor that's always a crowd-pleaser.",
      price: '9.99',
      options: [
        {
          name: 'Doneness',
          selectMax: 1,
          choices: doneness,
        },
        { name: 'Sides', selectMax: 2, choices: sides },
      ],
    },
    {
      image: '/images/menu/entrees/hamburger',
      name: 'Chicken Tenders',
      description:
        'Juicy, grilled to perfection, and nestled between a soft, toasted bun. Topped with fresh lettuce, ripe tomatoes, and a hint of sauce for a classic taste sensation.',
      price: '8.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/chicken-sandwich',
      name: "Coach's Chicken Sandwich",
      description:
        'Crispy on the outside, tender on the inside chicken breast, topped with fresh greens and a creamy sauce, all encased in a soft, toasted bun for a satisfying bite.',
      price: '7.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/porkchop',
      name: 'Penalty Porkchop',
      description:
        'Tender and succulent, expertly seasoned and seared to lock in the flavors. Served with a hint of herbs for a mouthwatering experience.',
      price: '8.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/ribs',
      name: 'Rifle Ribs',
      description:
        'Slow-cooked to fall-off-the-bone perfection, these ribs are glazed in a smoky, sweet barbecue sauce, offering a rich, finger-licking good flavor.',
      price: '10.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/salmon',
      name: 'Soccer Salmon',
      description:
        'Delicately seasoned and perfectly grilled, this salmon fillet boasts a flaky texture and a rich, buttery flavor, complemented by a light, citrusy glaze.',
      price: '10.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/wings',
      name: 'Wild Card Wings',
      description:
        'Crispy on the outside, juicy on the inside, tossed in your choice of savory sauces for a flavor-packed bite.',
      price: '7.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/grilled-chicken',
      name: 'Game Day Grilled Chicken',
      description:
        'Marinated and grilled to perfection, this chicken is infused with a blend of spices, offering a smoky, tender delight with every bite.',
      price: '8.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
  ],
};

const sandwiches = {
  name: 'Sandwiches',
  realName: 'Sandwiches',
  items: [
    {
      image: '/images/menu/entrees/steak',
      name: 'Sudden Death Steak',
      description:
        "Get in the game with our Sirloin Supreme! A champion cut, expertly seared for a robust flavor that's always a crowd-pleaser.",
      price: '9.99',
      options: [
        {
          name: 'Doneness',
          selectMax: 1,
          choices: doneness,
        },
        { name: 'Sides', selectMax: 2, choices: sides },
      ],
    },
    {
      image: '/images/menu/entrees/hamburger',
      name: 'Chicken Tenders',
      description:
        'Juicy, grilled to perfection, and nestled between a soft, toasted bun. Topped with fresh lettuce, ripe tomatoes, and a hint of sauce for a classic taste sensation.',
      price: '8.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/chicken-sandwich',
      name: "Coach's Chicken Sandwich",
      description:
        'Crispy on the outside, tender on the inside chicken breast, topped with fresh greens and a creamy sauce, all encased in a soft, toasted bun for a satisfying bite.',
      price: '7.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/porkchop',
      name: 'Penalty Porkchop',
      description:
        'Tender and succulent, expertly seasoned and seared to lock in the flavors. Served with a hint of herbs for a mouthwatering experience.',
      price: '8.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/ribs',
      name: 'Rifle Ribs',
      description:
        'Slow-cooked to fall-off-the-bone perfection, these ribs are glazed in a smoky, sweet barbecue sauce, offering a rich, finger-licking good flavor.',
      price: '10.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/salmon',
      name: 'Soccer Salmon',
      description:
        'Delicately seasoned and perfectly grilled, this salmon fillet boasts a flaky texture and a rich, buttery flavor, complemented by a light, citrusy glaze.',
      price: '10.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/wings',
      name: 'Wild Card Wings',
      description:
        'Crispy on the outside, juicy on the inside, tossed in your choice of savory sauces for a flavor-packed bite.',
      price: '7.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/entrees/grilled-chicken',
      name: 'Game Day Grilled Chicken',
      description:
        'Marinated and grilled to perfection, this chicken is infused with a blend of spices, offering a smoky, tender delight with every bite.',
      price: '8.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
  ],
};

const salads = {
  name: 'The Outfield',
  realName: 'Salads',
  items: [
    {
      image: '/images/menu/salads/buffalo-chicken',
      name: 'Ball Boy Buffalo Chicken Salad',
      description:
        'A delectible salad that brings together the zesty kick of buffalo sauce with the crisp freshness of garden greens.',
      price: '7.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/salads/caprese',
      name: 'Clutch Caprese Salad',
      description:
        'Our Caprese Salads are crafted with care and attention to quality, each salad features slices of ripe, juicy tomatoes layered with thick, creamy mozzarella cheese.',
      price: '5.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/salads/ceaser',
      name: 'Fencing Caesar Salad',
      description:
        'Each of our Caesar Salads feature crisp romaine lettuce leaves, gently tossed in our signature Caesar dressing, a mix of other vegetables, and a velvety blend of tangy Parmesan cheese.',
      price: '6.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/salads/greek',
      name: 'Olympic Greek Salad',
      description:
        'Each of our Greek Salads feature a colorful array of crisp lettuce, juicy tomatoes, crunchy cucumbers, tangy Kalamata olives, and briny feta cheese.',
      price: '5.50',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/salads/steakhouse',
      name: 'Strength Steakhouse Salad',
      description:
        'Our Steakhouse Salad brings together the bold flavors of tender, succulent steak with crisp, vibrant greens.',
      price: '8.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/salads/taco',
      name: 'Timeout Taco Salad',
      description:
        'Our Taco Salad brings together the bold flavors of tender, succulent steak with crisp, vibrant greens.',
      price: '7.50',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/salads/cobb',
      name: 'Field Goal Cobb Salad',
      description:
        'Our Cobb Salad features lettuce, grilled chicken, eggs, bacon, avocado, tomatoes, and blue cheese crumbles with vinaigrette.',
      price: '4.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
    {
      image: '/images/menu/salads/orzo',
      name: 'Penalty Box Orzo Salad',
      description:
        'Our Orzo Salad is orzo pasta tossed with diced vegetables, feta cheese, fresh herbs, and a tangy vinaigrette dressing.',
      price: '4.99',
      options: [{ name: 'Sides', selectMax: 2, choices: sides }],
    },
  ],
};

const kids = {
  name: 'Minor Leauge',
  realName: 'Kids',
  items: [
    {
      image: '/images/menu/kids/chicken-quesadilla',
      name: 'Touchdown Chicken Quesadilla',
      description:
        'Our chicken quesadilla is enhanced with a medley of colorful peppers and onions, as well as fragrant spices like cumin, paprika, and chili powder.  Served with salsa, guacamole, and sour cream.',
      price: '4.99',
      options: [{ name: 'Sides', selectMax: 1, choices: kids_sides }],
    },
    {
      image: '/images/menu/kids/grilled-cheese',
      name: 'Champ Grilled Cheese',
      description:
        'Each grilled cheese sandwich features layers of premium, ooey-gooey cheese sandwiched between two slices of perfectly toasted bread.',
      price: '4.50',
      options: [{ name: 'Sides', selectMax: 1, choices: kids_sides }],
    },
    {
      image: '/images/menu/kids/hotdog',
      name: 'Slamdog',
      description:
        'A plain hotdog between a golden bun.  Condiments can be ordered to your liking.',
      price: '3.50',
      options: [{ name: 'Sides', selectMax: 1, choices: kids_sides }],
    },
    {
      image: '/images/menu/kids/nuggets',
      name: 'End Zone Chicken Nuggets',
      description:
        'Chicken Nuggets crafted from tender chicken breast meat. Each nugget is coated in a crisp, golden breading that delivers a satisfying crunch with every bite.',
      price: '4.50',
      options: [{ name: 'Sides', selectMax: 1, choices: kids_sides }],
    },
    {
      image: '/images/menu/kids/pbj',
      name: 'Triple Play PB&J',
      description:
        'A Peanut Butter & Jelly sandwich.  Each sandwich features creamy peanut butter spread with sweet grape jelly.',
      price: '3.99',
      options: [{ name: 'Sides', selectMax: 1, choices: kids_sides }],
    },
    {
      image: '/images/menu/kids/pizza',
      name: "Slammin' Cheese Pizza",
      description:
        'Cheese Pizza served with a blend of premium cheeses, including mozzarella, provolone, and Parmesan',
      price: '4.99',
      serves: '1',
      options: [{ name: 'Sides', selectMax: 1, choices: kids_sides }],
    },
    {
      image: '/images/menu/kids/slider',
      name: 'Slam Dunk Sliders',
      description:
        'Sliders served with a perfectly seasoned patty made from premium beef, gently grilled to mouthwatering perfection.',
      price: '5.99',
      options: [{ name: 'Sides', selectMax: 1, choices: kids_sides }],
    },
    {
      image: '/images/menu/kids/fish-sticks',
      name: 'Hooked Up Fish Sticks',
      description:
        'Fish Sticks made from the finest cuts of premium white fish',
      price: '2.99',
      options: [{ name: 'Sides', selectMax: 1, choices: kids_sides }],
    },
  ],
};

const drinks = {
  name: 'The Cooler',
  realName: 'Drinks',
  items: [
    {
      image: '/images/menu/drinks/soda',
      name: 'PopPulse Soda',
      description:
        'A refreshing carbonated drink available in a variety of flavors.',
      price: '2.20',
      options: [
        {
          name: 'Flavor',
          selectMax: 1,
          choices: [
            'Cola',
            'Diet Cola',
            'Lemon and Lime',
            'Root Beer',
            'Citizen Pepper',
            'Orange Squeeze',
          ],
        },
        { name: 'Size', selectMax: 1, choices: cup_sizes },
      ],
    },
    {
      image: '/images/menu/drinks/iced-tea',
      name: 'Iced Tea',
      description:
        'A nice, cold refreshing tea.  Available sweetened or unsweetened.',
      price: '2.75',
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
    {
      image: '/images/menu/drinks/lemonade',
      name: 'Lemonade Blitz',
      description:
        'A refreshing sweet and sour lemonade, perfect to pair with a meal.',
      price: '1.99',
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
    {
      image: '/images/menu/drinks/smoothie',
      name: 'Berry Blast Smoothie',
      description:
        'Our specialty sweet, delicious berry smoothie made in-house.',
      price: '2.99',
      serves: 1,
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
    {
      image: '/images/menu/drinks/coffee',
      name: 'Goalpost Gourmet Coffee',
      description:
        'Get back in the game with a smooth, energizing cup of our house blend coffee.',
      price: '1.99',
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
    {
      image: '/images/menu/drinks/hot-chocolate',
      name: 'Hot Cocoa Rush',
      description:
        'A delicious Hot Chocolate, perfect to enjoy in cold weather. (Or year-round, no judgements.)',
      price: '2.45',
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
    {
      image: '/images/menu/drinks/apple-cider',
      name: 'Crisp Apple Cider',
      description:
        'Apple Cider slow-simmered with a delicate blend of aromatic spices, including cinnamon, cloves, and nutmeg.',
      price: '2.20',
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
    {
      image: '/images/menu/drinks/arnold-palmer',
      name: 'Lemon Kick Iced Tea',
      description: 'A blend of chilled black tea and zesty lemonade. ',
      price: '2.40',
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
  ],
};

const desserts = {
  name: 'Sweet Victory',
  realName: 'Desserts',
  items: [
    {
      image: '/images/menu/desserts/apple-pie',
      name: 'Apple Pie',
      description:
        'A classic dessert made with fresh apples and a flaky crust.',
      price: '3.99',
      options: null,
    },
    {
      image: '/images/menu/desserts/banoffee-pie',
      name: 'Banoffee Pie',
      description:
        'A banana-caramel pie served with a scoop of vanilla ice cream.',
      price: '3.99',
      options: null,
    },
    {
      image: '/images/menu/desserts/brownie-sundae',
      name: 'Brownie Sundae',
      description:
        'A nice vanilla sundae with brownie bits mixed in.  Topped with chocolate syrup.',
      price: '3.50',
      options: null,
    },
    {
      image: '/images/menu/desserts/cheese-cake',
      name: 'Yankee Cheesecake',
      description:
        'A classic New York cheesecake topped with raspberries and strawberry sauce.',
      price: '4.99',
      options: null,
    },
    {
      image: '/images/menu/desserts/lava-cake',
      name: 'Lava Cake',
      description: 'A chocolate cake topped with hot chocolate syrup.',
      price: '5.20',
      options: null,
    },
    {
      image: '/images/menu/desserts/strawberry-cake',
      name: 'Strawberry Cake',
      description:
        'Our classic vanilla-strawberry cake topped with strawberry jam.',
      price: '3.99',
      options: null,
    },
    {
      image: '/images/menu/desserts/icecream',
      name: 'Ice Cream Scoops',
      description:
        'A single scoop of ice cream available in a variety of flavors.',
      price: '3.50',
      options: [
        {
          name: 'Flavors',
          selectMax: 1,
          choices: ['Vanilla', 'Chocolate', 'Strawberry'],
        },
      ],
    },
    {
      image: '/images/menu/desserts/oreo-cupcake',
      name: 'Orea Cupcake',
      description: 'A rich Orea cupcake to scratch your sweet tooth.',
      price: '2.99',
      options: [
        {
          name: 'Flavor',
          selectMax: 1,
          choices: ['Vanilla', 'Chocolate'],
        },
      ],
    },
  ],
};

const milkshakes = {
  name: 'Frosty Flurries',
  realName: 'Milkshakes',
  items: [
    {
      image: '/images/menu/alcohol/beer',
      name: 'Classic Vanilla Milkshake',
      description: 'Draft Beer (Supplies may vary)',
      price: '7.99',
      options: [
        {
          name: 'Style',
          selectMax: 1,
          choices: [
            'Galactic Invasion',
            'Mystic Barrel',
            'Thunderclap Wheat Ale',
            'Shadow Cask Stout',
            'Solar Flare Saison',
            'Frost Giant Lager',
          ],
        },
      ],
    },
    {
      image: '/images/menu/alcohol/beer',
      name: 'Strawberry Cheesecake Milkshake',
      description: 'Draft Beer (Supplies may vary)',
      price: '7.99',
      options: [
        {
          name: 'Style',
          selectMax: 1,
          choices: [
            'Galactic Invasion',
            'Mystic Barrel',
            'Thunderclap Wheat Ale',
            'Shadow Cask Stout',
            'Solar Flare Saison',
            'Frost Giant Lager',
          ],
        },
      ],
    },
    {
      image: '/images/menu/alcohol/beer',
      name: 'Chocolate Fudge Brownie Milkshake',
      description: 'Draft Beer (Supplies may vary)',
      price: '7.99',
      options: [
        {
          name: 'Style',
          selectMax: 1,
          choices: [
            'Galactic Invasion',
            'Mystic Barrel',
            'Thunderclap Wheat Ale',
            'Shadow Cask Stout',
            'Solar Flare Saison',
            'Frost Giant Lager',
          ],
        },
      ],
    },
    {
      image: '/images/menu/alcohol/beer',
      name: 'Peanut Butter Banana Milkshake',
      description: 'Draft Beer (Supplies may vary)',
      price: '7.99',
      options: [
        {
          name: 'Style',
          selectMax: 1,
          choices: [
            'Galactic Invasion',
            'Mystic Barrel',
            'Thunderclap Wheat Ale',
            'Shadow Cask Stout',
            'Solar Flare Saison',
            'Frost Giant Lager',
          ],
        },
      ],
    },
  ],
};

const alcohol = {
  name: 'The Penalty Box',
  realName: 'Alcohol',
  items: [
    {
      image: '/images/menu/alcohol/beer',
      name: 'Draft Beer',
      description: 'Draft Beer (Supplies may vary)',
      price: '7.99',
      options: [
        {
          name: 'Style',
          selectMax: 1,
          choices: [
            'Galactic Invasion',
            'Mystic Barrel',
            'Thunderclap Wheat Ale',
            'Shadow Cask Stout',
            'Solar Flare Saison',
            'Frost Giant Lager',
          ],
        },
        {
          name: 'Size',
          selectMax: 1,
          choices: ['Pint', 'Mug', 'Pitcher'],
        },
      ],
    },
    {
      image: '/images/menu/alcohol/hard-seltzer',
      name: 'FizzQuench Co. Hard Seltzers',
      description: 'Alcoholic Seltzer',
      price: '7.99',
      options: [
        {
          name: 'Flavor',
          selectMax: 1,
          choices: [
            'Wild Berry',
            'Cherry',
            'Blueberry',
            'Citrus',
            'Grapefruit',
            'Melonator',
          ],
        },
        {
          name: 'Sizes',
          selectMax: 1,
          choices: ['12 oz', '16 oz', '19.2 oz'],
        },
      ],
    },
    {
      image: '/images/menu/alcohol/spiked-cranberry',
      name: 'Spiked Cranberry Juice',
      description: 'Alcoholic cranberry juice.',
      price: '8.99',
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
    {
      image: '/images/menu/alcohol/cola-rum',
      name: 'Cola and Rum',
      description: 'Cola spiked with rum.',
      price: '8.99',
      options: [{ name: 'Size', selectMax: 1, choices: cup_sizes }],
    },
  ],
};

const popular_now = [
  entrees.items[6],
  entrees.items[0],
  appetizers.items[6],
  desserts.items[3],
];

export { popular_now };

export default {
  appetizers,
  entrees,
  salads,
  kids,
  drinks,
  desserts,
  milkshakes,
  alcohol,
};
