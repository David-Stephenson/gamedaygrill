<script>
  import { Facebook, Twitter, Instagram } from "lucide-svelte";
  import Logo from "$components/global/Logo.svelte";

  const socialLinks = {
    Facebook: { component: Facebook, url: "https://www.facebook.com" },
    Twitter: { component: Twitter, url: "https://www.twitter.com" },
    Instagram: { component: Instagram, url: "https://www.instagram.com" },
  };
</script>

<footer class="bg-white text-gray-800 py-8 px-4">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-between">
    <div class="flex items-center space-x-2 md:space-x-4">
      <Logo class="h-12 fill-red-500" />
      <div>
        <h5 class="text-lg font-russo text-red-500">Game Day Grill</h5>
        <p class="text-sm italic text-gray-600">"Come for the game, stay for the grill!"</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
      <p class="text-sm">38 W Bridge St, Dublin, OH</p>
      <p class="text-sm">Phone: (614) 764-4932</p>
      <p class="text-sm">Hours: Mon-Fri 9am-9pm, Sat-Sun 10am-10pm</p>
      <p class="text-sm">Email: contact@gameday.com</p>
    </div>
    <div class="flex space-x-2 items-center md:items-start">
      {#each Object.entries(socialLinks) as [name, link]}
        <a href={link.url} class="text-red-500 hover:text-red-700">
          <svelte:component this={link.component} size={24} />
        </a>
      {/each}
    </div>
  </div>
</footer>
