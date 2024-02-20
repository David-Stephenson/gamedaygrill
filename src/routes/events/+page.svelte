<script>
  let events = [
    {
      id: 1,
      name: 'Super Bowl Watch Party',
      date: 'February 12, 2024',
      description:
        'Join us for the big game with special deals on wings and beer!',
      image: '/images/superbowl.jpg', // Make sure to replace these with your actual image paths
    },
    {
      id: 2,
      name: 'March Madness Kickoff',
      date: 'March 18, 2024',
      description:
        'Start the madness with us! Enjoy discounts on pitchers and appetizers.',
      image: '/images/marchmadness.jpg',
    },
    {
      id: 3,
      name: 'World Cup Final Viewing',
      date: 'December 18, 2024',
      description:
        "Watch the world's biggest game on our big screens. Special menu for the day!",
      image: '/images/worldcup.jpg',
    },
  ];
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-center mb-12 text-gray-800">
    Upcoming Events
  </h1>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each events as event}
      <div
        class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      >
        <img
          src={event.image}
          alt={event.name}
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h2 class="font-bold text-2xl mb-2 text-gray-800">{event.name}</h2>
          <p class="text-gray-600 text-sm mb-4">{event.date}</p>
          <p class="text-gray-700 text-base">{event.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
