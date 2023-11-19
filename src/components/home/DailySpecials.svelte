<script>
	const featuredDishes = [
		{
			name: 'Burger Supreme',
			description: 'Juicy beef patty with fresh veggies and our secret sauce',
			image: '/assets/burger.jpg'
		},
		{
			name: 'Chicken Wings Platter',
			description: 'Crispy wings tossed in our signature spicy sauce',
			image: '/assets/wings.jpg'
		},
		{
			name: 'Loaded Nachos',
			description: 'Crispy nachos topped with cheese, jalapenos, and more',
			image: '/assets/nachos.jpg'
		}
	];
</script>

<!-- Featured Dishes Section -->
<section class="py-12 px-4">
	<h2 class="text-4xl font-bold text-center mb-10">Todays Specials</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		<!-- For each dish in array -->
		{#each featuredDishes as dish (dish.name)}
			<div class="bg-white shadow rounded-lg overflow-hidden">
				<img class="h-56 w-full object-cover" src={dish.image} alt={dish.name} />
				<div class="p-6">
					<h3 class="text-2xl font-bold mb-2">{dish.name}</h3>
					<p class="text-gray-700">{dish.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
