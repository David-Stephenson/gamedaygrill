<script>
	import { Facebook, Twitter, Instagram } from 'lucide-svelte';
	import Logo from '$components/global/Logo.svelte';

	const socialLinks = {
		Facebook: { component: Facebook, url: 'https://www.facebook.com' },
		Twitter: { component: Twitter, url: 'https://www.twitter.com' },
		Instagram: { component: Instagram, url: 'https://www.instagram.com' }
	};
</script>

<footer class="bg-gray-800 text-white py-6 px-4">
	<div class="container mx-auto flex flex-wrap justify-between items-center">
		<div
			class="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left flex flex-col md:flex-row items-center"
		>
			<Logo class="h-12 fill-white mr-8" />
			<div>
				<h5 class="text-lg font-russo">Game Day Grill</h5>
			</div>
		</div>
		<div class="flex justify-center md:justify-start">
			{#each Object.entries(socialLinks) as [name, link]}
				<a href={link.url} class="text-white hover:text-gray-300 mx-2">
					<svelte:component this={link.component} size={24} />
				</a>
			{/each}
		</div>
	</div>
</footer>
