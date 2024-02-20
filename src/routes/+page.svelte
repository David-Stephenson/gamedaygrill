<script>
  import Hero from '$components/home/Hero.svelte';
  import DailySpecials from '$components/home/DailySpecials.svelte';
  import RewardsBanner from '$components/home/RewardsBanner.svelte';

  import Carousel from '$components/home/Carousel.svelte';
  import Map from '$components/home/Map.svelte';
  import Hours from '$components/home/Hours.svelte';
</script>

<!-- HTML Head -->
<svelte:head>
  <title>Game Day Grill</title>
</svelte:head>

<Carousel />

<div class="my-5 rounded-[25px] overflow-hidden">
  <div class="w-full h-auto bg-gray-100 items-center p-5">
    <h1 class="text-3xl mb-3">What's Popular?</h1>

    <!-- Adjusted flex container to center the cards -->
    <div class="flex flex-wrap">
      <div class="border border-2 border-red-500 p-5 rounded-[25px]">
        <img src="/images/test/steak.png" alt="" class="w-96" />
        <h1 class="text-2xl font-bold">STEAK</h1>
        <p>This is text</p>
        <button>Add To Cart</button>
      </div>
      <div class="border border-2 border-red-500 p-5 rounded-[25px]">
        <img src="/images/test/tater-tots.png" alt="" class="w-96" />
        <h1>STEAK</h1>
        <p>This is text</p>
        <button>Add To Cart</button>
      </div>
      <div class="border border-2 border-red-500 p-5 rounded-[25px]">
        <img src="/images/test/steak.png" alt="" class="w-96" />
        <h1>STEAK</h1>
        <p>This is text</p>
        <button>Add To Cart</button>
      </div>
      <div class="border border-2 border-red-500 p-5 rounded-[25px]">
        <img src="/images/test/steak.png" alt="" class="w-96" />
        <h1>STEAK</h1>
        <p>This is text</p>
        <button>Add To Cart</button>
      </div>
      <div class="border border-2 border-red-500 p-5 rounded-[25px]">
        <img src="/images/test/steak.png" alt="" class="w-96" />
        <h1>STEAK</h1>
        <p>This is text</p>
        <button>Add To Cart</button>
      </div>
    </div>

    <!-- Container for the "View More" button to center it -->
    <div class="flex justify-center mt-4">
      <button class="bg-red-500 px-4 py-3 rounded-full text-white"
        >View More</button
      >
    </div>
  </div>
</div>

<div class="my-5 rounded-[25px] overflow-hidden grid grid-cols-2 gap-4">
  <div class="w-full h-auto items-center">
    <div class="hidden md:block lg:block xl:block 2xl:block w-[full] h-[600px] relative rounded-[25px] overflow-hidden">
      <Map />
    </div>
  </div>

  <div class="w-full h-[600px] items-center rounded-[25px] overflow-hidden">
    <Hours />
  </div>
</div>

<div class="bg-gray-50 min-h-screen flex flex-col">
  <!-- Hero Section -->
  <!-- <Hero /> -->

  <!-- Rewards Banner Section -->
  <RewardsBanner />

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
