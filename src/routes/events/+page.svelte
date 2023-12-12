<script>
  import { onMount } from 'svelte';
  let events = [
    {
      id: 1,
      title: 'Football Night',
      date: '2023-11-20',
      description:
        'Enjoy the game on our big screens with special discounts on drinks.',
    },
    {
      id: 2,
      title: 'Trivia Tuesday',
      date: '2023-11-21',
      description: 'Join us for a fun night of trivia and win exciting prizes.',
    },
    // Add more events here...
  ];
  let upcomingEvent = null;

  onMount(() => {
    // Sort the events by date and get the first one
    upcomingEvent = [...events].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    )[0];
  });
</script>

<svelte:head>
  <title>Events | Game Day Grill</title>
</svelte:head>

<div class="container mx-auto px-4">
  <h1 class="text-4xl font-bold mb-4 text-center text-blue-600 pt-12">
    Upcoming Events
  </h1>

  {#each events as event (event.id)}
    <div class="bg-white shadow-lg overflow-hidden sm:rounded-lg mb-4 p-4">
      <h2 class="text-2xl leading-6 font-medium text-gray-900">
        {event.title}
      </h2>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">{event.date}</p>
      <hr class="my-2" />
      <p class="text-sm text-gray-500">{event.description}</p>
    </div>
  {/each}

  {#if upcomingEvent}
    <div class="bg-blue-500 text-white p-4 mt-4 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold">Most Upcoming Event</h2>
      <h3 class="text-xl">{upcomingEvent.title}</h3>
      <p>{upcomingEvent.date}</p>
      <p>{upcomingEvent.description}</p>
    </div>
  {/if}
</div>
