<script>
  import { fade, scale } from 'svelte/transition';
  import { MoveUp } from 'lucide-svelte';

  let showButton = false;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleScroll() {
    showButton = window.pageYOffset > 200;
  }
</script>

<svelte:window on:scroll={handleScroll} />

{#if showButton}
  <button
    class="fixed bottom-4 right-4 bg-red-500 text-white rounded-full p-4 drop-shadow-md hover:drop-shadow-lg transition-drop-shadow duration-300 z-50 -mx-3 -my-1"
    on:click={scrollToTop}
    transition:scale={{ duration: 300, start: 0.8 }}
  >
    <MoveUp class="h-6 w-6" />
  </button>
{/if}
