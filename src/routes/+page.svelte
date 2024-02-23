<script>
  import Carousel from '$components/home/Carousel.svelte';
  import Map from '$components/home/Map.svelte';
  import Hours from '$components/home/Hours.svelte';
  import CustomerReview from '$components/home/CustomerReview.svelte';

  import { popular_now } from '$lib/menu.js';
</script>

<!-- HTML Head -->
<svelte:head>
  <title>Game Day Grill</title>
</svelte:head>

<Carousel />

<!-- "Popular Items" -->
<div class="mt-5">
  <h1 class="text-2xl mb-1 text-center sm:text-left rounded-[25px] font-russo">
    Popular Now
  </h1>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    {#each popular_now as item, index}
      <div
        class="flex flex-col border-2 border-red-500 rounded-[25px] overflow-hidden"
      >
        <div class="aspect-w-1 aspect-h-1 w-full">
          <picture class="aspect-w-1 aspect-h-1 w-full">
            <source type="image/avif" srcset="{item.image}.avif" />
            <source type="image/webp" srcset="{item.image}.webp" />
            <img
              src="{item.image}.png"
              alt={item.name}
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div class="p-4 flex flex-col flex-grow">
          <h1 class="text-2xl font-bold rounded-[25px] mb-2 text-center">
            {item.name}
          </h1>
        </div>
      </div>
    {/each}
  </div>
  <!-- Centered View More Button -->
  <div class="text-center mt-4">
    <a
      href="/menu"
      class="inline-block py-3 px-6 bg-red-500 rounded-full text-white font-medium text-lg hover:bg-red-600 hover:text-white transition-colors duration-200 ease-in-out"
      >View More</a
    >
  </div>
</div>

<div
  class="my-5 rounded-[25px] overflow-hidden flex flex-col md:flex-row gap-4"
>
  <div class="flex-grow md:flex-grow-3 w-full h-auto flex justify-center">
    <div
      class="w-full h-[550px] relative rounded-[25px] overflow-hidden border-2 border-red-500"
    >
      <Map />
    </div>
  </div>

  <div
    class="flex-grow md:flex-grow-1 w-full h-auto flex justify-center items-center rounded-[25px] overflow-hidden border-2 border-red-500"
  >
    <div class="h-full w-full">
      <Hours />
    </div>
  </div>
</div>

<CustomerReview />

<!-- <section
  class="my-5 py-12 px-4 md:px-12 bg-red-600 text-white text-center rounded-[25px] shadow-lg transform"
>
  <h2 class="text-3xl md:text-4xl font-extrabold mb-8">
    Reserve Your Table Now
  </h2>
  <p class="text-lg md:text-xl mb-8">
    What are you waiting for? Experience the best game day dishes in town!
    Reserve your table now and enjoy the game with us.
  </p>
  <a
    href="/reserve"
    class="inline-block py-3 md:py-4 px-6 md:px-8 bg-white text-red-600 text-lg md:text-xl font-bold rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-90"
    >Reserve Now</a
  >
</section>
<div
  class="w-full h-96 rounded-[25px]"
  style="background-image: url('/images/test/bar.png');"
>
  <h1>Milkshke Bar</h1>
</div> -->

<div class="my-5 rounded-[25px] overflow-hidden">
  <div class="bg-gray-100 p-5">
    <h2 class="text-lg font-bold text-center mb-4">
      Subscribe to Our Newsletter
    </h2>
    <p class="text-sm text-gray-700 text-center mb-4">
      Stay updated with the latest news, exclusive offers, and special events at
      Game Day Grill. Sign up now to not miss out!
    </p>
    <form method="POST" class="flex flex-col items-center gap-2">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        class="px-4 py-2 border rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      />
      <button
        type="submit"
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full max-w-md transition duration-150 ease-in-out"
        >Subscribe</button
      >
    </form>
  </div>
</div>
