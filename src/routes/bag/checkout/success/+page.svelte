<script>
  import { Confetti } from 'svelte-confetti';
</script>

<svelte:head>
  <title>Order Success | Game Day Grill</title>
</svelte:head>

<div
  class="fixed top-[-50px] left-0 h-screen w-screen flex justify-center overflow-hidden pointer-events-none z-[-1]"
>
  <Confetti
    x={[-5, 5]}
    y={[0, 0.1]}
    delay={[500, 2000]}
    infinite
    rounded
    duration="5000"
    amount="250"
    fallDistance="100vh"
  />
</div>

<div class="flex-grow flex items-center justify-center">
  <div
    class="backdrop-blur shadow-lg rounded-[25px] p-10 border-2 border-red-500 text-center dark:text-white relative z-10"
  >
    <div class="mb-4">
      <h1 class="text-8xl">🎉</h1>
    </div>
    <h1 class="text-4xl font-bold mb-4">Your Order is In!</h1>
    <p class="text-xl mb-8">
      Thank you for your order. We'll call you 5 minutes before your order is
      ready for pickup.
    </p>
    <a
      href="/"
      class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
      >Back to Home</a
    >
  </div>
</div>
