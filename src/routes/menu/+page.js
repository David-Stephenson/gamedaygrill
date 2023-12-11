const menu = {
  appetizers: [
    {
      name: "Olympic Onion Rings",
      description: "A basket of onion rings",
      price: "$7.99",
      img: "/images/menu/onionrings.jpeg",
    },
    {
      name: "Knockout Nachos",
      description: "Tortilla chips, cheese, and your choice of meat",
      price: "$6.99",
      img: "/images/menu/appetizers/nachos.jpeg",
    },
    {
      name: "Fighter French Fries",
      description: "French fries with your choice of meat",
      price: "$6.99",
      img: "/images/menu/frenchfries.jpeg",
    },
    {
      name: "Kickball Kebabs",
      description: "Meat and veggies on a stick",
      price: "$6.99",
      img: "/images/menu/kebabs.jpeg",
    },
    {
      name: "Tackle Tater Tots",
      price: "$6.99",
      img: "/images/menu/tater_tots.jpeg",
    },
  ],
  entrees: [
    { name: "Steak", price: "$14.99", description: "bla", img: "/images/menu/entrees/steak.jpeg" },
    { name: "Hamburger", price: "$9.99", img: "/images/menu/entrees/hamburger.jpeg" },
    { name: "Wings", price: "$9.99", img: "/images/menu/entrees/wings.jpeg" },
    { name: "Chicken Sandwich", price: "$9.99", img: "/images/menu/entrees/chickensandwich.jpeg" },
    { name: "Caesar Salad", price: "$9.99", img: "/images/menu/entrees/salad.jpeg" },
  ],
  sides: [
    { name: "French Fries", price: "$1.99", img: "/images/menu/sides/fries.jpeg" },
    { name: "Mozzarella Sticks", price: "$4.99", img: "/images/menu/sides/mozzarellasticks.jpeg" },
    { name: "Coleslaw", price: "$2.99", img: "/images/menu/coleslaw.jpeg" },
    { name: "Placeholder11", price: "$4.99", img: "https://placehold.co/150" },
    { name: "Placeholder12", price: "$4.99", img: "https://placehold.co/150" },
  ],
  kids: [
    {
      name: "Chicken Nuggets",
      price: "$4.99",
      description: "Chicken nuggests with fries, apple slices, and a glass of chocolate milk",
      img: "/images/menu/kids/nuggets.jpeg",
    },
    { name: "Mini Pizza", price: "$5.99", img: "/images/menu/kids/pizza.jpeg" },
    { name: "Placeholder13", price: "$5.99", img: "https://placehold.co/150" },
    { name: "Placeholder14", price: "$5.99", img: "https://placehold.co/150" },
    { name: "Placeholder15", price: "$5.99", img: "https://placehold.co/150" },
  ],
  drinks: [
    {
      name: "PopPulse Soda Products",
      price: "$1.99",
      img: "/images/menu/soda.jpeg",
    },
    { name: "Beer", price: "$1.99", img: "/images/menu/beer.jpeg" },
    { name: "Lemonade", price: "$1.99", img: "/images/menu/lemonade.jpeg" },
    { name: "Placeholder17", price: "$1.99", img: "https://placehold.co/150" },
    { name: "Placeholder18", price: "$1.99", img: "https://placehold.co/150" },
  ],
  desserts: [
    {
      name: "Slam Dunk Sundae",
      price: "$3.99",
      img: "/images/menu/sundae.jpeg",
    },
    {
      name: "Championship Cheesecake",
      price: "$4.99",
      img: "/images/menu/cheesecake.jpeg",
    },
    {
      name: "Home Run Brownies",
      price: "$3.99",
      img: "https://placehold.co/150",
    },
    {
      name: "Overtime Oreo Cheesecake",
      price: "$4.99",
      img: "https://placehold.co/150",
    },
    { name: "Cheesecake", price: "$4.99", img: "https://placehold.co/150" },
  ],
};

export async function load({ params }) {
  return menu;
}
