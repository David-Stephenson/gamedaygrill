<script>
  const featuredDishes = [
    {
      name: 'Burger Supreme',
      description: 'Juicy beef patty with fresh veggies and our secret sauce.',
      image: 'images/specials/burger.webp',
    },
    {
      name: 'Chicken Wings Platter',
      description: 'Crispy wings tossed in our signature spicy sauce.',
      image: 'images/specials/wings.webp',
    },
    {
      name: 'Loaded Nachos',
      description: 'Crispy nachos topped with cheese, jalapenos, and more',
      image: 'images/specials/nachos.webp',
    },
    {
      name: 'Onion Rings',
      description:
        'Hot, fresh, and crispy onion rings served with your choice of any two sauces.',
      image: 'images/specials/onionrings.webp',
    },
  ];
</script>

<section class="py-12 px-4 hidden lg:flex xl:flex 2xl:flex">
  <h2 class="text-4xl font-bold text-center mb-5">Today's Specials</h2>
  <div class="grid grid-flow-col gap-8">
    <!-- For each dish in array -->
    {#each featuredDishes as dish (dish.name)}
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <img
          class="h-64 w-full object-cover"
          src={dish.image}
          alt={dish.name}
        />
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">{dish.name}</h3>
          <p class="text-gray-700">{dish.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
