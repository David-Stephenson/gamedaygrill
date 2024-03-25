<script>
  import { onMount } from 'svelte';
  import { Confetti } from 'svelte-confetti';

  let partyName = '';
  let date = '';
  let time = '';
  let reservationId = '';

  onMount(() => {
    // Get the reservation details from the URL parameters or local storage
    const urlParams = new URLSearchParams(window.location.search);
    partyName = urlParams.get('partyName');
    date = urlParams.get('date');
    time = urlParams.get('time');
    // Generate a random reservation ID
    reservationId = Math.floor(Math.random() * 1000000);
  });
</script>

<svelte:head>
  <title>Reservation Complete | Game Day Grill</title>
</svelte:head>

<div
  class="fixed top-[-50px] left-0 h-screen w-screen flex justify-center overflow-hidden pointer-events-none z-[-1]"
>
  <Confetti
    x={[-7, 7]}
    y={[0, 0.1]}
    delay={[500, 2000]}
    infinite
    rounded
    duration="6000"
    amount="350"
    fallDistance="100vh"
  />
</div>

<div class="flex-grow flex items-center justify-center">
  <section class="flex justify-center items-center py-12">
    <div
      class="backdrop-blur max-w-xl mx-auto py-6 px-4 rounded-[25px] shadow-md text-center border-2 border-red-500 dark:text-white"
    >
      <h2 class="text-2xl font-bold mb-4">Thank You for Your Reservation!</h2>
      <p class="mb-4">
        We have reserved a table for <strong>{partyName}</strong> on
        <strong>{date}</strong>
        at <strong>{time}</strong>.
      </p>
      <p>
        Your reservation ID is <strong>{reservationId}</strong>. Please keep
        this ID for your records.
      </p>
    </div>
  </section>
</div>
