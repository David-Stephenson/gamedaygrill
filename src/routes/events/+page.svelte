<script>
  import { goto } from '$app/navigation';
  export let data;
</script>

<svelte:head>
  <title>Events | Game Day Grill</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="flex flex-wrap justify-center gap-8">
    {#each data.events as event}
      <div
        class="bg-white rounded-[25px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border-2 border-red-500 cursor-pointer transform hover:-translate-y-1 hover:scale-105 w-full md:w-1/2 lg:w-1/3"
        on:click={() => {
          goto(`/events/${event.slug}`);
        }}
      >
        <img
          src={event.image}
          alt={event.title}
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="font-bold text-2xl mb-2 text-gray-800 text-center">
            {event.title}
          </h2>
          <p class="text-gray-600 text-lg mb-4 text-center">{event.date}</p>
          <p class="text-gray-700 text-base">{event.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
