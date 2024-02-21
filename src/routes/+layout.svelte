<script>
  // Global CSS imports
  import '../app.css';

  // Svelte Imports
  import { onMount } from 'svelte';

  // Components
  import Navbar from '$components/global/Navbar.svelte';
  import Footer from '$components/global/Footer.svelte';
</script>

<!-- Import Fonts -->
<svelte:head>
  <link rel="preconnect" href="https://fonts.bunny.net" />
  <link rel="preconnect" href="https://fonts.bunny.net" />
  <link rel="preconnect" href="https://fonts.bunny.net" />
  <link
    href="https://fonts.bunny.net/css?family=russo-one:400|yellowtail:400"
    rel="stylesheet"
  />
</svelte:head>

<main class="flex flex-col min-h-screen">
  <!-- Navbar -->
  <header>
    <Navbar />
  </header>

  <!-- Site Content -->
  <content class="flex-1 mx-0 md:mx-12 2xl:mx-52 my-5">
    <slot />
  </content>

  <!-- Footer -->
  <Footer />
</main>
