const menu = {
  appetizers: [
    {
      name: 'Olympic Onion Rings',
      description: 'A basket of onion rings',
      price: '$7.99',
      img: '/images/menu/appetizers/onionrings.webp',
    },
    {
      name: 'Knockout Nachos',
      description: 'Tortilla chips, cheese, and ground beef',
      price: '$6.99',
      img: '/images/menu/appetizers/nachos.webp',
    },
    {
      name: 'Fighter French Fries',
      description: 'French fries with cheese sauce and bacon',
      price: '$6.99',
      img: '/images/menu/appetizers/frenchfries.webp',
    },
    {
      name: 'Kickball Kebabs',
      description: 'Beef kebabs with peppers and onions',
      price: '$6.99',
      img: '/images/menu/appetizers/kebabs.webp',
    },
    {
      name: 'Tackle Tater Tots',
      price: '$6.99',
      img: '/images/menu/appetizers/tater_tots.webp',
    },
  ],
  entrees: [
    {
      name: 'Sizzle Supreme Steak',
      price: '$14.99',
      description: 'bla',
      img: '/images/menu/entrees/steak.webp',
    },
    {
      name: 'Gridiron Grind Burgers',
      price: '$9.99',
      img: '/images/menu/entrees/hamburger.webp',
    },
    {
      name: 'Wing Stadium Specials',
      price: '$9.99',
      img: '/images/menu/entrees/wings.webp',
    },
    {
      name: 'Cluck n Kick Sandwich',
      price: '$9.99',
      img: '/images/menu/entrees/chickensandwich.webp',
    },
    {
      name: 'Caesar Blitz Bowl',
      price: '$9.99',
      img: '/images/menu/entrees/salad.webp',
    },
  ],
  sides: [
    {
      name: 'Field Fry Frenzy',
      price: '$1.99',
      img: '/images/menu/sides/fries.webp',
    },
    {
      name: 'Cheese Blitz Sticks',
      price: '$4.99',
      img: '/images/menu/sides/mozzarellasticks.webp',
    },
    {
      name: 'Slaw Sideliner',
      price: '$2.99',
      img: '/images/menu/sides/coleslaw.webp',
    },
    {
      name: 'Grid Iron Green Beans',
      price: '$4.99',
      img: '/images/menu/sides/greenybeans.webp',
    },
    {
      name: 'Beet Blitz Bites',
      price: '$4.99',
      img: '/images/menu/sides/beatchips.webp',
    },
  ],
  kids: [
    {
      name: 'Cluck Squad Nuggets',
      price: '$4.99',
      description:
        'Chicken nuggests with fries, apple slices, and a glass of chocolate milk',
      img: '/images/menu/kids/nuggets.webp',
    },
    {
      name: 'Mini Touchdown Pizzeria',
      price: '$5.99',
      img: '/images/menu/kids/pizza.webp',
    },
    {
      name: 'Cheese Stadium Melts',
      price: '$5.99',
      img: '/images/menu/kids/grilledcheese.webp',
    },
    {
      name: 'Grillside Franks',
      price: '$5.99',
      img: '/images/menu/kids/hotdog.webp',
    },
    {
      name: 'Cluck Fiesta Quesadilla',
      price: '$5.99',
      img: '/images/menu/kids/quesadilla.webp',
    },
  ],
  drinks: [
    {
      name: 'PopPulse Soda Products',
      price: '$1.99',
      img: '/images/menu/drinks/soda.webp',
    },
    {
      name: 'Brew Blitz Beer',
      price: '$1.99',
      img: '/images/menu/drinks/beer.webp',
    },
    {
      name: 'Citrus Slammer Quencher',
      price: '$1.99',
      img: '/images/menu/drinks/lemonade.webp',
    },
    {
      name: 'Blend Zone Refreshers',
      price: '$1.99',
      img: '/images/menu/drinks/smoothie.webp',
    },
    {
      name: 'Bloody Mary',
      price: '$1.99',
      img: '/images/menu/drinks/bloodymary.webp',
    },
  ],
  desserts: [
    {
      name: 'Slam Dunk Sundae',
      price: '$3.99',
      img: '/images/menu/desserts/sundae.webp',
    },
    {
      name: 'Championship Cheesecake',
      price: '$4.99',
      img: '/images/menu/desserts/cheesecake.webp',
    },
    {
      name: 'Home Run Brownies',
      price: '$3.99',
      img: '/images/menu/desserts/brownies.webp',
    },
    {
      name: 'Salam Stadium Scoops',
      price: '$4.99',
      img: '/images/menu/desserts/icecream.webp',
    },
    {
      name: 'Grannys Touchdown Pies',
      price: '$4.99',
      img: '/images/menu/desserts/applepie.webp',
    },
  ],
};

export async function load({ params }) {
  return menu;
}
