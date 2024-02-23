<script>
  import { Star } from 'lucide-svelte';

  const reviews = [
    {
      rating: 5,
      reviewText: 'Loved the wings and the atmosphere!',
      reviewerName: 'Alex',
    },
    {
      rating: 4,
      reviewText: 'Great screens, the game was awesome!',
      reviewerName: 'Sam',
    },
    {
      rating: 5,
      reviewText: 'Best sports grill in town. Period.',
      reviewerName: 'Morgan',
    },
    {
      rating: 4,
      reviewText: 'A fantastic place to catch a game.',
      reviewerName: 'Casey',
    },
  ];
</script>

<div class="flex flex-wrap justify-around items-stretch p-4">
  {#each reviews as review}
    <div
      class="max-w-full md:max-w-xs lg:max-w-sm xl:max-w-md p-4 m-2 bg-white border-2 border-red-500 rounded-[25px] space-y-2 flex flex-col"
    >
      <div class="flex justify-center space-x-1">
        {#each Array(5) as _, i}
          <Star
            class="w-5 h-5"
            fill={i < review.rating ? 'currentColor' : 'none'}
            stroke={i < review.rating ? 'currentColor' : '#cbd5e1'}
          />
        {/each}
      </div>
      <p class="text-gray-700 text-center">{review.reviewText}</p>
      <div class="text-right text-sm text-gray-500">{review.reviewerName}</div>
    </div>
  {/each}
</div>
