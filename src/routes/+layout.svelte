<script>
	// Global CSS imports
	import '../app.css';

	// Svelte Imports
	import { onMount } from 'svelte';

	// Components
	import Navbar from '$components/global/Navbar.svelte';
	import Footer from '$components/global/Footer.svelte';

	onMount(() => {
		/* Used to detect if the user is using Microsoft Edge
		 Used for changing images and videos to formats that are supported by Edge
		 Edge doesn't support AV1 or AVIF for some reason even though it's based on Chromium */
		if (navigator.userAgent.indexOf('Edg') > -1) {
			console.log('Microsoft Edge');
		}
	});
</script>

<!-- Import Fonts -->
<svelte:head>
	<link rel="preconnect" href="https://fonts.bunny.net" />
	<link href="https://fonts.bunny.net/css?family=russo-one:400" rel="stylesheet" />
</svelte:head>

{@html '<!-- This comment shows up in production-->'}

<main class="flex flex-col min-h-screen">
	<!-- Navbar -->
	<header>
		<Navbar />
	</header>

	<!-- Site Content -->
	<content class="flex-1">
		<slot />
	</content>

	<!-- Footer -->
	<Footer />
</main>
