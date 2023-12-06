<script>
  import Hero from "$components/home/Hero.svelte";
  import DailySpecials from "$components/home/DailySpecials.svelte";
  import RewardsBanner from "$components/home/RewardsBanner.svelte";
</script>

<!-- HTML Head -->
<svelte:head>
  <title>Game Day Grill</title>
</svelte:head>

<div class="bg-gray-50 min-h-screen flex flex-col">
  <!-- Hero Section -->
  <Hero />

  <!-- Rewards Banner Section -->
  <RewardsBanner />

  <!-- Daily Specials Section -->
  <DailySpecials />

  <!-- Reservation CTA Section -->
  <section class="py-12 px-4 bg-red-600 text-white text-center">
    <h2 class="text-4xl font-bold mb-8">Reserve Your Table Now</h2>
    <p class="text-xl mb-8">Experience the best game day dishes in town. Reserve your table now and enjoy the game with us.</p>
    <a href="/reserve" class="inline-block py-4 px-8 bg-white text-red-600 text-xl font-bold rounded-lg transition duration-200 hover:bg-opacity-90"
      >Reserve Now</a
    >
  </section>
</div>
