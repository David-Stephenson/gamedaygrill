<script>
  import { onMount } from "svelte";
  let partyName = "";
  let date = "";
  let time = "";
  let reservationId = "";

  onMount(() => {
    // Get the reservation details from the URL parameters or local storage
    const urlParams = new URLSearchParams(window.location.search);
    partyName = urlParams.get("partyName");
    date = urlParams.get("date");
    time = urlParams.get("time");
    // Generate a random reservation ID
    reservationId = Math.floor(Math.random() * 1000000);
  });
</script>

<section class="flex justify-center items-center py-12">
  <div class="max-w-xl mx-auto py-6 px-4 bg-white rounded shadow-md text-center">
    <h2 class="text-2xl font-bold mb-4">Thank You for Your Reservation!</h2>
    <p class="mb-4">We have reserved a table for <strong>{partyName}</strong> on <strong>{date}</strong> at <strong>{time}</strong>.</p>
    <p>Your reservation ID is <strong>{reservationId}</strong>. Please keep this ID for your records.</p>
  </div>
</section>
