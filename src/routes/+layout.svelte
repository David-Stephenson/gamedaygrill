<script>
  import '../app.css';
  import { Toaster } from 'svelte-french-toast';
  import Navbar from '$components/global/Navbar.svelte';
  import Footer from '$components/global/Footer.svelte';
  import ScrollToTop from '$components/ScrollToTop.svelte';
</script>

<!-- Import Fonts -->
<svelte:head>
  <link rel="preconnect" href="https://fonts.bunny.net" />
  <link
    href="https://fonts.bunny.net/css?family=russo-one:400|yellowtail:400"
    rel="stylesheet"
  />

  <!-- Analytics -->
  <script
    defer
    data-domain="gamedaygrill.pages.dev"
    src="https://plausible.stephenson.systems/js/script.js"
  ></script>
</svelte:head>

<main class="flex flex-col min-h-screen">
  <!-- Navbar -->
  <header>
    <Navbar />
  </header>

  <!-- Site Content -->
  <content class="flex-grow flex flex-col mx-0 md:mx-12 2xl:mx-52 my-4">
    <slot />
    <Toaster />
    <ScrollToTop />
  </content>

  <!-- Footer -->
  <Footer />
</main>
