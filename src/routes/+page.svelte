<script>
  import RewardsBanner from '$components/home/RewardsBanner.svelte';

  import Carousel from '$components/home/Carousel.svelte';
  import Map from '$components/home/Map.svelte';
  import Hours from '$components/home/Hours.svelte';

  import { popular_now } from '$lib/menu.js';
</script>

<!-- HTML Head -->
<svelte:head>
  <title>Game Day Grill</title>
</svelte:head>

<Carousel />

<!-- "Popular Items" -->

<div class="mt-5">
  <h1 class="text-2xl font-bold mb-1 text-center sm:text-left uppercase">
    Popular Now
  </h1>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    {#each popular_now as item, index}
      <div
        class="flex flex-col border-2 border-red-500 rounded-2xl overflow-hidden"
      >
        <div class="aspect-w-1 aspect-h-1 w-full">
          <img
            src={item.image}
            alt={item.name}
            class="object-cover w-full h-full"
          />
        </div>
        <div class="p-4 flex flex-col flex-grow">
          <h1 class="text-2xl font-bold uppercase mb-2">{item.name}</h1>
          <p class="flex-grow text-sm line-clamp-3">{item.description}</p>
          <button
            class="bg-red-500 px-3 py-2 rounded-full text-white mt-4 self-start"
          >
            Add To Cart
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>

<div
  class="my-5 rounded-[25px] overflow-hidden flex flex-col md:flex-row gap-4"
>
  <div class="flex-grow md:flex-grow-3 w-full h-auto flex justify-center">
    <div class="w-full h-[550px] relative rounded-[25px] overflow-hidden">
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

<div class="bg-gray-50 min-h-screen flex flex-col">
  <!-- Hero Section -->
  <!-- <Hero /> -->

  <!-- Rewards Banner Section -->
  <!-- <RewardsBanner /> -->

  <!-- Daily Specials Section -->
  <!-- <DailySpecials /> -->

  <!-- Reservation CTA Section -->
  <section class="py-12 px-4 bg-red-600 text-white text-center">
    <h2 class="text-4xl font-bold mb-8">Reserve Your Table Now</h2>
    <p class="text-xl mb-8">
      Experience the best game day dishes in town. Reserve your table now and
      enjoy the game with us.
    </p>
    <a
      href="/reserve"
      class="inline-block py-4 px-8 bg-white text-red-600 text-xl font-bold rounded-lg transition duration-200 hover:bg-opacity-90"
      >Reserve Now</a
    >
  </section>
</div>

<div
  class="w-full h-96 rounded-[25px]"
  style="background-image: url('/images/test/bar.png');"
>
  <h1>Milkshke Bar</h1>
</div>

<div class="my-5 rounded-[25px] overflow-hidden">
  <div class="bg-white p-5">
    <h2 class="text-lg font-bold text-center mb-4">
      Subscribe to Our Newsletter
    </h2>
    <form
      action="YOUR_SUBSCRIPTION_ENDPOINT"
      method="POST"
      class="flex flex-col items-center gap-2"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        class="px-4 py-2 border rounded-md w-full max-w-md"
      />
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full max-w-md"
        >Subscribe</button
      >
    </form>
  </div>
</div>
