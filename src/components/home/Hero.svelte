<script>
  import Logo from "$components/global/Logo.svelte";

  let video;
  function handleInteraction() {
    video.play();
  }
</script>

<!-- Detect User Interactions -->
<svelte:window on:click={handleInteraction} />

<section class="relative h-[40vh] bg-cover bg-center">
  <video autoplay muted loop class="absolute w-full h-full object-cover" bind:this={video}>
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
  <div class="absolute inset-0 bg-black opacity-50" />
  <div class="relative h-full flex flex-col items-center justify-center text-center text-white drop-shadow2xl">
    <Logo class="h-32 fill-white mb-3" />
    <h1 class="text-5xl font-russo">Game Day Grill</h1>
    <h2 class="font-bold">Come for the game, stay for the grill!</h2>
    <!-- <p class="mt-2 text-xl">Experience the best game day dishes in town</p> -->
  </div>
</section>
