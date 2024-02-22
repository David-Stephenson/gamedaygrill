<script>
  import { information, contact } from '$config';
  import { Facebook, Twitter, Instagram, Phone, MapPin } from 'lucide-svelte';
  import Logo from '$components/global/Logo.svelte';

  const socialLinks = {
    Facebook: { component: Facebook, url: 'https://www.facebook.com' },
    Twitter: { component: Twitter, url: 'https://www.twitter.com' },
    Instagram: { component: Instagram, url: 'https://www.instagram.com' },
  };
</script>

<footer>
  <div class="bg-gray-50 text-gray-800 py-8">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-center"
    >
      <div class="flex items-center space-x-2 md:space-x-4 justify-center">
        <Logo class="h-12 fill-red-500" />
        <div>
          <h5 class="text-lg font-russo text-red-500">
            {information.name}
          </h5>
          <p class="text-sm italic text-gray-600">
            {information.slogan}
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center text-gray-600 text-center">
        <a class="text-sm flex items-center gap-1" href="#"
          ><MapPin size="16" /><span>{contact.address}</span></a
        >
        <a class="text-sm flex items-center gap-1" href="tel:{contact.phone}"
          ><Phone size="16" /><span>{contact.phone}</span></a
        >
      </div>
      <div class="flex space-x-2 items-center md:items-start justify-center">
        {#each Object.entries(socialLinks) as [name, link]}
          <a href={link.url} class="text-red-500 hover:text-red-700">
            <svelte:component this={link.component} size={24} />
          </a>
        {/each}
      </div>
    </div>
  </div>
  <div class="h-2 w-full bg-red-500" />
</footer>
