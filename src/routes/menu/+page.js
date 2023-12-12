const menu = {
  appetizers: [
    {
      name: 'Olympic Onion Rings',
      description: 'A basket of onion rings',
      price: '$7.99',
      img: '/images/menu/appetizers/onionrings.jpeg',
    },
    {
      name: 'Knockout Nachos',
      description: 'Tortilla chips, cheese, and ground beef',
      price: '$6.99',
      img: '/images/menu/appetizers/nachos.jpeg',
    },
    {
      name: 'Fighter French Fries',
      description: 'French fries with cheese sauce and bacon',
      price: '$6.99',
      img: '/images/menu/appetizers/frenchfries.jpeg',
    },
    {
      name: 'Kickball Kebabs',
      description: 'Beef kebabs with peppers and onions',
      price: '$6.99',
      img: '/images/menu/appetizers/kebabs.jpeg',
    },
    {
      name: 'Tackle Tater Tots',
      price: '$6.99',
      img: '/images/menu/appetizers/tater_tots.jpeg',
    },
  ],
  entrees: [
    {
      name: 'Sizzle Supreme Steak',
      price: '$14.99',
      description: 'bla',
      img: '/images/menu/entrees/steak.jpeg',
    },
    {
      name: 'Gridiron Grind Burgers',
      price: '$9.99',
      img: '/images/menu/entrees/hamburger.jpeg',
    },
    {
      name: 'Wing Stadium Specials',
      price: '$9.99',
      img: '/images/menu/entrees/wings.jpeg',
    },
    {
      name: 'Cluck n Kick Sandwich',
      price: '$9.99',
      img: '/images/menu/entrees/chickensandwich.jpeg',
    },
    {
      name: 'Caesar Blitz Bowl',
      price: '$9.99',
      img: '/images/menu/entrees/salad.jpeg',
    },
  ],
  sides: [
    {
      name: 'Field Fry Frenzy',
      price: '$1.99',
      img: '/images/menu/sides/fries.jpeg',
    },
    {
      name: 'Cheese Blitz Sticks',
      price: '$4.99',
      img: '/images/menu/sides/mozzarellasticks.jpeg',
    },
    {
      name: 'Slaw Sideliner',
      price: '$2.99',
      img: '/images/menu/sides/coleslaw.jpeg',
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
      img: '/images/menu/kids/nuggets.jpeg',
    },
    {
      name: 'Mini Touchdown Pizzeria',
      price: '$5.99',
      img: '/images/menu/kids/pizza.jpeg',
    },
    {
      name: 'Cheese Stadium Melts',
      price: '$5.99',
      img: '/images/menu/kids/grilledcheese.jpeg',
    },
    {
      name: 'Grillside Franks',
      price: '$5.99',
      img: '/images/menu/kids/hotdog.jpeg',
    },
    {
      name: 'Cluck Fiesta Quesadilla',
      price: '$5.99',
      img: '/images/menu/kids/quesadilla.jpeg',
    },
  ],
  drinks: [
    {
      name: 'PopPulse Soda Products',
      price: '$1.99',
      img: '/images/menu/drinks/soda.jpeg',
    },
    {
      name: 'Brew Blitz Beer',
      price: '$1.99',
      img: '/images/menu/drinks/beer.jpeg',
    },
    {
      name: 'Citrus Slammer Quencher',
      price: '$1.99',
      img: '/images/menu/drinks/lemonade.jpeg',
    },
    {
      name: 'Blend Zone Refreshers',
      price: '$1.99',
      img: '/images/menu/drinks/smoothie.jpeg',
    },
    {
      name: 'Bloody Mary',
      price: '$1.99',
      img: '/images/menu/drinks/bloodymary.jpeg',
    },
  ],
  desserts: [
    {
      name: 'Slam Dunk Sundae',
      price: '$3.99',
      img: '/images/menu/desserts/sundae.jpeg',
    },
    {
      name: 'Championship Cheesecake',
      price: '$4.99',
      img: '/images/menu/desserts/cheesecake.jpeg',
    },
    {
      name: 'Home Run Brownies',
      price: '$3.99',
      img: '/images/menu/desserts/brownies.jpeg',
    },
    {
      name: 'Sundae Stadium Scoops',
      price: '$4.99',
      img: '/images/menu/desserts/icecream.jpeg',
    },
    {
      name: 'Grannys Touchdown Pies',
      price: '$4.99',
      img: '/images/menu/desserts/applepie.jpeg',
    },
  ],
};

export async function load({ params }) {
  return menu;
}
