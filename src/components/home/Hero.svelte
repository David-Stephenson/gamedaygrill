<script>
  import { information } from '$config';
  import Logo from '$components/global/Logo.svelte';

  let video;
  function handleInteraction() {
    video.play();
  }
</script>

<!-- Detect User Interactions -->
<svelte:window on:click={handleInteraction} />

<section class="relative h-[55vh] bg-cover bg-center">
  <video
    autoplay
    muted
    loop
    class="absolute w-full h-full object-cover"
    poster="/images/hero-poster.webp"
    bind:this={video}
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
  <div class="absolute inset-0 bg-black opacity-50" />
  <div
    class="relative h-full flex flex-row items-center justify-center text-white drop-shadow-2xl"
  >
    <div class="container px-4 md:px-6">
      <div
        class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
      >
        <div class="flex flex-col justify-center space-y-4">
          <div class="space-y-2">
            <h1
              class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            >
              Welcome to {information.name}
            </h1>
            <p
              class="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
            >
              A place where sports and taste meet. Enjoy the best games with the
              best food.
            </p>
          </div>
          <div class="flex flex-col gap-2 min-[400px]:flex-row">
            <a
              class="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/menu"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
