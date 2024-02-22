<script>
  import { information } from '$config';
  import { ShoppingBag, User2, Menu } from 'lucide-svelte';
  import LogoComponent from '$components/global/Logo.svelte';

  const links = {
    About: '/about',
    Events: '/events',
    Menu: '/menu',
    Reserve: '/reserve',
  };

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function closeDropdown() {
    isOpen = false;
  }
</script>

<div class="bg-white text-gray-800 px-4 sm:px-8 pt-5 relative">
  <nav class="flex justify-between items-center">
    <a
      href="/"
      class="text-2xl text-center text-red-500 font-russo flex items-center"
    >
      <LogoComponent class="h-8 fill-current" />
      <span class="ml-3 hidden md:inline">{information.name}</span>
      <!-- Adjusted to md:inline -->
    </a>
    <div class="hidden md:flex justify-center flex-grow text-gray-800">
      <!-- Adjusted to md:flex -->
      {#each Object.entries(links) as [name, url]}
        <a href={url} class="text-base mx-4 capitalize">{name}</a>
      {/each}
    </div>
    <div class="hidden lg:flex items-center text-gray-800">
      <!-- Adjusted to lg:flex for larger screens -->
      <a href="/bag" class="text-sm mx-4">
        <ShoppingBag />
      </a>
      <a href="/account" class="text-sm mx-4">
        <User2 />
      </a>
    </div>
    <button
      class="lg:hidden flex items-center px-3 py-2"
      on:click={toggleDropdown}
    >
      <Menu />
    </button>
  </nav>
  {#if isOpen}
    <div
      id="dropdown"
      class="lg:hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
      tabindex="0"
    >
      {#each Object.entries(links) as [name, url]}
        <a
          href={url}
          class="block px-4 py-2 text-base capitalize text-gray-800"
          on:click={closeDropdown}>{name}</a
        >
      {/each}
      <a
        href="/bag"
        class="block px-4 py-2 text-base text-gray-800"
        on:click={closeDropdown}>Bag</a
      >
      <a
        href="/account"
        class="block px-4 py-2 text-base text-gray-800"
        on:click={closeDropdown}>Account</a
      >
    </div>
  {/if}
</div>
