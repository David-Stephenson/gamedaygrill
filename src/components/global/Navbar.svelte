<script>
  import { goto } from "$app/navigation";
  import { information, contact } from "$config";
  import { ShoppingBag, User2, MapPin, Phone } from "lucide-svelte";

  // Links for the navbar
  const links = {
    events: "/events",
    menu: "/menu",
    reserve: "/reserve",
    
  };
</script>

<div class="bg-white text-gray-800 px-8 py-3 shadow">
  <div class="flex justify-between items-center mb-3">
    <a href="https://maps.app.goo.gl/CBtUFmniFkbwYs5q6" target="_blank" class="text-sm text-gray-600 flex items-center">
      <MapPin size="16" class="mr-1" />
      {contact.address}
    </a>
    <a href="tel:{contact.phone}" class="text-sm text-gray-600 flex items-center">
      <Phone size="16" class="mr-1" />
      {contact.phone}
    </a>
  </div>
  <nav class="flex justify-between items-center">
    <a href="/" class="text-2xl text-center text-red-600 font-russo">{information.name}</a>
    <div class="flex justify-center flex-grow text-gray-800">
      {#each Object.entries(links) as [name, url]}
        <a href={url} class="text-base mx-4 capitalize">{name}</a>
      {/each}
    </div>
    <div class="flex items-center text-gray-800">
      <a href="/bag" class="text-sm mx-4">
        <ShoppingBag />
      </a>
      <a href="/account" class=" text-sm mx-4">
        <User2 />
      </a>
    </div>
  </nav>
</div>
