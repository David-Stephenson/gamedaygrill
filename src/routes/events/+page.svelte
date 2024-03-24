<script>
  export let data;
</script>

<svelte:head>
  <title>Events | Game Day Grill</title>
</svelte:head>

<div class="container mx-auto px-4">
  <div class="flex flex-wrap justify-center gap-8">
    {#each data.events as event}
      <a
        class="bg-white dark:bg-neutral-800 rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer border-2 border-red-500"
        href={`/events/${event.slug}`}
      >
        <div class="relative">
          <picture class="w-full h-48">
            <source type="image/avif" srcset="{event.image}.avif" />
            <source type="image/webp" srcset="{event.image}.webp" />
            <img
              src="{event.image}.png"
              alt={event.title}
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 dark:opacity-75"
          ></div>
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h2 class="text-xl font-semibold text-white">{event.title}</h2>
            <p class="text-sm text-gray-200">{event.date}</p>
          </div>
        </div>
        <div class="p-6">
          <p class="text-gray-700 dark:text-gray-300 text-base">
            {event.description}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
