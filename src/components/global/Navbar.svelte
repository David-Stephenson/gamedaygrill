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
  class="text-gray-800 py-5 relative backdrop-blur border-b-2 border-red-500"
>
  <nav class="flex justify-between items-center md:mx-12 2xl:mx-52">
    <a
      href="/"
      class="text-2xl text-center text-red-500 font-russo flex items-center"
    >
      <LogoComponent class="h-8 fill-current" />
      <span class="ml-3 hidden md:inline">{information.name}</span>
    </a>
    <div class="hidden md:flex justify-center flex-grow text-gray-800">
      {#each Object.entries(links) as [name, url]}
        <a href={url} class="text-base mx-4 capitalize">{name}</a>
      {/each}
    </div>
    <div class="hidden lg:flex items-center text-gray-800">
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
    <button
      class="lg:hidden flex items-center px-3 py-2"
      on:click={toggleDropdown}
    >
      <Menu />
    </button>
  </nav>

  <!-- Mobile dropdown -->
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
