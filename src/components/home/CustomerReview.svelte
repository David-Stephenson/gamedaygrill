<script>
  import { Star } from 'lucide-svelte';
  import Card from '$components/Card.svelte';

  const reviews = [
    {
      rating: 5,
      reviewText: 'Loved the wings and the atmosphere!',
      reviewerName: 'Connor C.',
    },
    {
      rating: 4,
      reviewText: 'Great screens, the game was awesome!',
      reviewerName: 'David S.',
    },
    {
      rating: 5,
      reviewText: 'Best sports grill in town. Period.',
      reviewerName: 'Salam S.',
    },
    {
      rating: 4,
      reviewText: 'A fantastic place to catch a game.',
      reviewerName: 'Yousif A.',
    },
  ];
</script>

<div class="flex flex-wrap gap-4 justify-around items-stretch">
  {#each reviews as review}
    <Card>
      <div class="flex justify-center space-x-1">
        {#each Array(5) as _, i}
          <Star
            class="w-5 h-5 text-red-500"
            fill={i < review.rating ? 'currentColor' : 'none'}
            stroke={i < review.rating ? 'currentColor' : '#cbd5e1'}
          />
        {/each}
      </div>
      <p class="text-gray-700 text-center">{review.reviewText}</p>
      <div class="text-right text-sm text-gray-500">
        {review.reviewerName}
      </div>
    </Card>
  {/each}
</div>
