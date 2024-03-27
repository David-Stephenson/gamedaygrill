<script>
  import { onMount } from 'svelte';
  import { confettiEnabled } from '$lib/stores.js';
  import { onDestroy } from 'svelte';
  import { Home } from 'lucide-svelte';

  let partyName = '';
  let date = '';
  let time = '';

  onMount(() => {
    // Get the reservation details from the URL parameters or local storage
    const urlParams = new URLSearchParams(window.location.search);
    partyName = urlParams.get('partyName');
    date = urlParams.get('date');
    time = urlParams.get('time');
  });

  // Enable confetti
  confettiEnabled.set(true);

  // Disable confetti on page destroy
  onDestroy(() => {
    confettiEnabled.set(false);
  });
</script>

<svelte:head>
  <title>Reservation Complete | Game Day Grill</title>
</svelte:head>

<div class="flex flex-grow items-center justify-center">
  <div
    class="relative z-10 rounded-3xl bg-white/20 p-10 text-center shadow-lg backdrop-blur-lg dark:bg-neutral-600/20 dark:text-white"
  >
    <div class="mb-6">
      <h1 class="text-8xl">🎉</h1>
    </div>
    <h1 class="mb-6 text-4xl font-bold">Thank You for Your Reservation!</h1>
    <p class="mb-12 text-xl">
      We have reserved a table for <strong>{partyName}</strong> on
      <strong>{date}</strong> at <strong>{time}</strong>!
    </p>
    <a
      href="/"
      class="inline-flex items-center rounded-full bg-red-500 px-8 py-3 text-white transition duration-300 hover:bg-red-600"
    >
      <Home class="mr-2 h-5 w-5" />
      Back to Home
    </a>
  </div>
</div>
