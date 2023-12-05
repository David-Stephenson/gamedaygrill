const menu = {
  appetizers: [
    { name: "Grand Slam Sliders", price: "$7.99", img: "https://placehold.co/150" },
    { name: "Knockout Nachos", price: "$6.99", img: "https://placehold.co/150" },
    { name: "Curveball Coleslaw", price: "$6.99", img: "https://placehold.co/150" },
    { name: "Kickball Kebabs", price: "$6.99", img: "https://placehold.co/150" },
    { name: "Knockout Nachos", price: "$6.99", img: "https://placehold.co/150" },
  ],
  salads: [
    { name: "French Fries", price: "$3.99", img: "https://placehold.co/150" },
    { name: "Coleslaw", price: "$2.99", img: "https://placehold.co/150" },
    { name: "Coleslaw", price: "$2.99", img: "https://placehold.co/150" },
    { name: "Coleslaw", price: "$2.99", img: "https://placehold.co/150" },
    { name: "Coleslaw", price: "$2.99", img: "https://placehold.co/150" },
  ],
  entrees: [
    { name: "Steak", price: "$14.99", img: "https://placehold.co/150" },
    { name: "Burger", price: "$9.99", img: "https://placehold.co/150" },
    { name: "Burger", price: "$9.99", img: "https://placehold.co/150" },
    { name: "Burger", price: "$9.99", img: "https://placehold.co/150" },
    { name: "Burger", price: "$9.99", img: "https://placehold.co/150" },
  ],
  sides: [
    { name: "Coca Cola Products", price: "$1.99", img: "https://placehold.co/150" },
    { name: "Beer", price: "$4.99", img: "https://placehold.co/150" },
    { name: "Beer", price: "$4.99", img: "https://placehold.co/150" },
    { name: "Beer", price: "$4.99", img: "https://placehold.co/150" },
    { name: "Beer", price: "$4.99", img: "https://placehold.co/150" },
  ],
  kids: [
    { name: "Chicken Nuggets", price: "$4.99", img: "https://placehold.co/150" },
    { name: "Mini Pizza", price: "$5.99", img: "https://placehold.co/150" },
    { name: "Mini Pizza", price: "$5.99", img: "https://placehold.co/150" },
    { name: "Mini Pizza", price: "$5.99", img: "https://placehold.co/150" },
    { name: "Mini Pizza", price: "$5.99", img: "https://placehold.co/150" },
  ],
  drinks: [
    { name: "Coca Cola Products", price: "$1.99", img: "https://placehold.co/150" },
    { name: "Coca Cola Products", price: "$1.99", img: "https://placehold.co/150" },
    { name: "Coca Cola Products", price: "$1.99", img: "https://placehold.co/150" },
    { name: "Coca Cola Products", price: "$1.99", img: "https://placehold.co/150" },
    { name: "Coca Cola Products", price: "$1.99", img: "https://placehold.co/150" },
  ],
  desserts: [
    { name: "Slam Dunk Sundae", price: "$3.99", img: "https://placehold.co/150" },
    { name: "Championship Cheesecake", price: "$4.99", img: "https://placehold.co/150" },
    { name: "Home Run Brownie Sundae", price: "$3.99", img: "https://placehold.co/150" },
    { name: "Overtime Oreo Cheesecake", price: "$4.99", img: "https://placehold.co/150" },
    { name: "Cheesecake", price: "$4.99", img: "https://placehold.co/150" },
  ],
};

export async function load({ params }) {
  return menu;
}
