<script>
  import toast from 'svelte-french-toast';
  import Carousel from '$components/home/Carousel.svelte';
  import Map from '$components/home/Map.svelte';
  import Hours from '$components/home/Hours.svelte';
  import CustomerReview from '$components/home/CustomerReview.svelte';
  import { ChevronRight } from 'lucide-svelte';
  import { popular_now } from '$lib/menu.js';

  import { information } from '$lib/config.js';
</script>

<!-- HTML Head -->
<svelte:head>
  <title>Game Day Grill | {information.slogan}</title>
</svelte:head>

<Carousel />

<!-- Popular items heading text  -->
<div class="mt-5">
  <div class="flex justify-between items-center">
    <h1 class="text-2xl mb-2 rounded-[25px] font-russo dark:text-white">
      Popular Now
    </h1>
    <a
      href="/menu"
      class="inline-flex items-center text-red-500 hover:text-red-700 font-medium"
    >
      View More <ChevronRight size="20" class="ml-1" />
    </a>
  </div>

  <!-- Popular items cards  -->
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each popular_now as item, index}
      <a
        class="flex flex-col w-full h-full rounded-[25px] border-2 border-red-500 bg-white dark:bg-neutral-800"
        href="/menu/#{item.name}"
      >
        <div class="w-full">
          <picture class="w-full">
            <source type="image/avif" srcset="{item.image}.avif" />
            <source type="image/webp" srcset="{item.image}.webp" />
            <img
              src="{item.image}.png"
              alt={item.name}
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div class="p-4 flex-grow">
          <h1 class="text-2xl font-bold mb-2 text-center dark:text-white">
            {item.name}
          </h1>
        </div>
      </a>
    {/each}
  </div>
</div>

<div
  class="my-5 rounded-[25px] overflow-hidden flex flex-col md:flex-row gap-4"
>
  <div class="flex-grow md:flex-grow-3 w-full h-auto flex justify-center">
    <!-- Map -->
    <div
      class="w-full h-[550px] relative rounded-[25px] overflow-hidden border-2 border-red-500"
    >
      <Map />
    </div>
  </div>

  <!-- Hours -->
  <div
    class="flex-grow md:flex-grow-1 w-full h-auto flex justify-center items-center rounded-[25px] overflow-hidden border-2 border-red-500"
  >
    <div class="h-full w-full">
      <Hours />
    </div>
  </div>
</div>

<!-- Customer Reviews -->
<CustomerReview />

<!-- Newsletter -->
<div class="rounded-[25px] overflow-hidden border-2 border-red-500">
  <div class="bg-white dark:bg-neutral-800 p-8">
    <div class="max-w-md mx-auto text-center">
      <h2 class="text-2xl font-bold text-center mb-4 text-red-500">
        Stay Connected
      </h2>
      <p class="text-base text-gray-700 dark:text-gray-300 text-center mb-6">
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
          class="px-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
        />
        <button
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full w-full transition duration-150 ease-in-out"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</div>
