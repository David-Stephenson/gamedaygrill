<script>
  import { onMount } from 'svelte';
  let events = [
    {
      id: 1,
      title: 'Football Night',
      date: '2023-12-18',
      description:
        'Enjoy the game on our big screens with special discounts on drinks.',
    },
    {
      id: 2,
      title: 'Trivia Tuesday',
      date: '2023-12-19',
      description: 'Join us for a fun night of trivia and win exciting prizes.',
    },
    {
      id: 3,
      title: 'Christmas Cheese Party',
      date: '2023-12-24',
      description: 'Enjoy a variety of cheese with your friends and family.',
    },
    {
      id: 4,
      title: 'New Year Party',
      date: '2023-12-31',
      description:
        'Celebrate the new year with us and enjoy special discounts. Grill open till 2 AM!',
    },
    {
      id: 5,
      title: "Valentine's Day",
      date: '2024-02-14',
      description:
        'Enjoy a romantic dinner with your loved one and get a free dessert.',
    },
  ];
  let upcomingEvent = null;

  onMount(() => {
    // Sort the events by date and get the first one
    upcomingEvent = [...events].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    )[0];
    // Remove the upcoming event from the events array
    events = events.filter(event => event.id !== upcomingEvent.id);
  });
</script>

<svelte:head>
  <title>Events | Game Day Grill</title>
</svelte:head>

<div class="container mx-auto px-4 pt-10">
  <h1 class="text-3xl font-bold mb-4 text-center text-red-500">
    Get Ready for Our Exciting Upcoming Events!
  </h1>

  {#if upcomingEvent}
    <div class="bg-red-500 text-white p-4 mt-4 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold">Don't Miss Our Next Event!</h2>
      <h3 class="text-lg">{upcomingEvent.title}</h3>
      <p class="text-sm">{upcomingEvent.date}</p>
      <p class="text-sm">{upcomingEvent.description}</p>
    </div>
  {/if}

  {#each events as event (event.id)}
    <div
      class="bg-white shadow-lg overflow-hidden sm:rounded-lg mb-4 p-2 transform transition duration-500 ease-in-out hover:scale-105"
    >
      <h2 class="text-xl leading-6 font-medium text-gray-900">
        {event.title}
      </h2>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">{event.date}</p>
      <hr class="my-2" />
      <p class="text-sm text-gray-500">{event.description}</p>
    </div>
  {/each}
</div>
