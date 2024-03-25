<script>
  import { information } from '$config';
  import { bag } from '$lib/stores';
  import { ShoppingBag, User2, Menu } from 'lucide-svelte';
  import LogoComponent from '$components/global/Logo.svelte';

  const links = {
    Menu: '/menu',
    Reserve: '/reserve',
    Events: '/events',
    Rewards: '/rewards',
    About: '/about',
  };

  let isOpen = false;
  let bagCount;

  bag.subscribe(value => {
    bagCount = 0;

    value.forEach(item => {
      bagCount += item.quantity;
    });
  });

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function closeDropdown() {
    isOpen = false;
  }
</script>

<div
  class="backdrop-blur text-gray-800 dark:text-white py-5 relative border-b-2 border-red-500 dark:bg-neutral-900/40"
>
  <nav class="flex items-center justify-between md:mx-12 2xl:mx-52">
    <div class="flex items-center">
      <a
        href="/"
        class="text-2xl text-center text-red-500 font-russo flex items-center ml-4 md:ml-0"
      >
        <LogoComponent class="h-8 fill-current" />
        <span class="ml-3 hidden md:inline whitespace-nowrap"
          >{information.name}</span
        >
      </a>
    </div>
    <div
      class="hidden md:flex justify-center flex-grow text-gray-800 dark:text-white"
    >
      {#each Object.entries(links) as [name, url]}
        <a href={url} class="text-base mx-4 capitalize hover:text-red-500"
          >{name}</a
        >
      {/each}
    </div>
    <div class="md:hidden flex items-center justify-center flex-grow">
      <!-- Bag icon -->
      <a href="/bag" class="text-sm mx-4 relative">
        <ShoppingBag />
        <!-- Bag overlay -->
        {#if bagCount}
          <span
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5"
            >{bagCount}</span
          >
        {/if}
      </a>

      <!-- Account icon -->
      <a href="/account" class="text-sm mx-4">
        <User2 />
      </a>
    </div>
    <div class="hidden md:flex items-center text-gray-800 dark:text-white">
      <!-- Bag icon -->
      <a href="/bag" class="text-sm mx-4 relative">
        <ShoppingBag />
        <!-- Bag overlay -->
        {#if bagCount}
          <span
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5"
            >{bagCount}</span
          >
        {/if}
      </a>

      <!-- Account icon -->
      <a href="/account" class="text-sm mx-4">
        <User2 />
      </a>
    </div>
    <div class="md:hidden flex items-center justify-end mr-4">
      <button
        class="flex items-center px-3 py-2 text-gray-800 dark:text-white"
        on:click={toggleDropdown}
      >
        <Menu />
      </button>
    </div>
  </nav>
</div>

<!-- Mobile dropdown -->
{#if isOpen}
  <div
    id="dropdown"
    class="md:hidden absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-lg z-50 overflow-hidden"
  >
    {#each Object.entries(links) as [name, url]}
      <a
        href={url}
        class="block px-4 py-2 text-base capitalize text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
        on:click={closeDropdown}>{name}</a
      >
    {/each}
    <!-- Bag icon -->
    <a
      href="/bag"
      class="block px-4 py-2 text-base text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
      on:click={closeDropdown}
    >
      Bag
      {#if bagCount}
        <span
          class="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-2"
          >{bagCount}</span
        >
      {/if}
    </a>
    <!-- Account icon -->
    <a
      href="/account"
      class="block px-4 py-2 text-base text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
      on:click={closeDropdown}
    >
      Account
    </a>
  </div>
{/if}

<style>
  @media (max-width: 767px) {
    .whitespace-nowrap {
      font-size: 1.25rem;
    }
  }
</style>
