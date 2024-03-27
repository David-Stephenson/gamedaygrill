<script>
  import toast from 'svelte-french-toast';
  import { ChevronRight } from 'lucide-svelte';
  import Carousel from '$components/home/Carousel.svelte';
  import Map from '$components/home/Map.svelte';
  import Hours from '$components/home/Hours.svelte';
  import CustomerReview from '$components/home/CustomerReview.svelte';
  import { popular_now } from '$lib/menu.js';
  import { information } from '$lib/config.js';
</script>

<!-- HTML Head -->
<svelte:head>
  <title>Game Day Grill | {information.slogan}</title>
</svelte:head>

<!-- Carousel -->
<Carousel />

<!-- Popular items heading text -->
<div class="mt-5">
  <div class="flex items-center justify-between">
    <h1 class="mb-2 text-2xl font-russo rounded-[25px] dark:text-white">
      Popular Now
    </h1>
    <a
      href="/menu"
      class="inline-flex items-center font-medium text-red-500 hover:text-red-700"
    >
      View More <ChevronRight size="20" class="ml-1" />
    </a>
  </div>

  <!-- Popular items cards -->
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    {#each popular_now as item, index}
      <a
        class="flex flex-col w-full h-full bg-white border-2 border-red-500 rounded-[25px] backdrop-blur bg-neutral-200/50 dark:bg-neutral-600/50"
        href="/menu/#{item.name}"
      >
        <div class="w-full">
          <picture class="w-full">
            <source type="image/avif" srcset="{item.image}.avif" />
            <source type="image/webp" srcset="{item.image}.webp" />
            <img
              src="{item.image}.png"
              alt={item.name}
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div class="flex-grow p-4">
          <h1 class="mb-2 text-2xl font-bold text-center dark:text-white">
            {item.name}
          </h1>
        </div>
      </a>
    {/each}
  </div>
</div>

<div
  class="flex flex-col gap-4 my-5 overflow-hidden rounded-[25px] md:flex-row"
>
  <div class="flex justify-center w-full h-auto flex-grow md:flex-grow-3">
    <!-- Map -->
    <div
      class="relative w-full h-[550px] overflow-hidden border-2 border-red-500 rounded-[25px]"
    >
      <Map />
    </div>
  </div>

  <!-- Hours -->
  <div
    class="flex justify-center items-center w-full h-auto overflow-hidden border-2 border-red-500 rounded-[25px] flex-grow md:flex-grow-1"
  >
    <div class="w-full h-full">
      <Hours />
    </div>
  </div>
</div>

<!-- Customer Reviews -->
<CustomerReview />

<!-- Newsletter -->
<div class="overflow-hidden border-2 border-red-500 rounded-[25px]">
  <div class="p-8 bg-white dark:bg-neutral-800">
    <div class="max-w-md mx-auto text-center">
      <h2 class="mb-4 text-2xl font-bold text-center text-red-500">
        Stay Connected
      </h2>
      <p class="mb-6 text-base text-center text-gray-700 dark:text-gray-300">
        Sign up for our newsletter to receive exclusive offers, updates on
        events, and the latest news from Game Day Grill.
      </p>
      <form
        class="flex flex-col items-center gap-4"
        on:submit|preventDefault={() => {
          toast.success("You're now subscribed to our newsletter!", {
            icon: '📧',
          });
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          class="w-full px-4 py-2 text-white border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-neutral-700 dark:border-neutral-600"
        />
        <button
          class="w-full px-6 py-2 font-bold text-white transition duration-150 ease-in-out bg-red-500 rounded-full hover:bg-red-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</div>
