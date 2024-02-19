<script>
  import { information, contact } from '$config';
  import { ShoppingBag, User2, MapPin, Phone, AlignJustify } from 'lucide-svelte';
  import Logo from '$components/global/Logo.svelte';
  import { onMount } from 'svelte';

  // Links for the navbar
  const links = {
    About: '/about',
    Events: '/events',
    Menu: '/menu',
    Reserve: '/reserve',
  };
let isOpen = false;

  
function toggleDropdown (){
      isOpen = !isOpen;
      
    }

  onMount(() => {
    function handleClick(event) {
      if (!event.target.closest('.dropdown')) {
        if (dropdown && !dropdown.contains(event.target)){
        isOpen = false;
        }
      }
    }


  window.addEventListener('click', handleClick)

  return () => {
    window.removeEventListener('click', handleClick);
  };
});

</script>

<div class="bg-white text-gray-800 px-8 py-3">
  
  <!-- <div class="flex justify-between items-center mb-3">
    <a
      href="https://maps.app.goo.gl/CBtUFmniFkbwYs5q6"
      target="_blank"
      class="text-sm text-gray-600 flex items-center"
    >
      <MapPin size="16" class="mr-1" />
      {contact.address}
    </a>
    <a
      href="tel:{contact.phone}"
      class="text-sm text-gray-600 flex items-center"
    >
      <Phone size="16" class="mr-1" />
      {contact.phone}
    </a>
  </div> -->
  <nav class="flex justify-between items-center">
    <a href="/" class="text-2xl text-center text-red-500 font-russo">
      <Logo class="h-8 fill-red-500 inline" />
      {information.name}
    </a>
    <div class="flex justify-center flex-grow text-gray-800">
      
    </div>
    <div class="hidden md:flex lg:flex xl:flex 2xl:flex items-center text-gray-800">
      <a href="/bag" class="text-sm mx-4">
        <ShoppingBag />
      </a>
      <a href="/account" class=" text-sm mx-4">
        <User2 />
      </a>
    </div>
    <div id='dropdown' class='md:hidden lg:hidden xl:hidden 2xl:hidden inline-block items-center content-center'>
      <button on:click={toggleDropdown}>
        <AlignJustify />
      </button>
      {#if isOpen}
        <div id="content" class="absolute right-0 mt-2 ml-4w-48 bg-white rounded-md shadow-lg z-10">
          {#each Object.entries(links) as [name, url]}
        <a href={url} class="block no-underline mr-12 py-3 mx-6 ">{name}</a>
      {/each}
      <a href="/bag" class="block sp-6 no-underline pr-6 py-3 mx-6">Bag</a>
      <a href="/account" class="block sp-6 no-underline pr-6 py-3 mx-6">Account</a>          
        </div>
        {/if}
    </div>
  </nav>
</div>
