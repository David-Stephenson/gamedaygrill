<script>
  import { information, contact } from '$config';
  import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Phone,
    MapPin,
    Mail,
  } from 'lucide-svelte';
  import Logo from '$components/global/Logo.svelte';

  const socialLinks = {
    Facebook: { component: Facebook, url: 'https://www.facebook.com' },
    Twitter: { component: Twitter, url: 'https://www.twitter.com' },
    Instagram: { component: Instagram, url: 'https://www.instagram.com' },
    Linkedin: { component: Linkedin, url: 'https://www.linkedin.com/' },
  };
</script>

<footer class="bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-white">
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div class="flex justify-center md:justify-start items-center space-x-2">
        <Logo class="h-8 fill-red-500" />
        <div>
          <h5 class="text-xl font-russo text-red-500">
            {information.name}
          </h5>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {information.slogan}
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <a
          class="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500"
          href="tel:{contact.phone}"
        >
          <Phone size="16" /><span>{contact.phone}</span>
        </a>
        <a
          class="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500"
          href="mailto:{contact.email}"
        >
          <Mail size="16" /><span>{contact.email}</span>
        </a>
        <a
          class="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500"
          href="#"
        >
          <MapPin size="16" /><span>{contact.address}</span>
        </a>
      </div>
      <div class="flex justify-center md:justify-end">
        <div class="flex space-x-4">
          {#each Object.entries(socialLinks) as [name, link]}
            <a
              href={link.url}
              class="text-gray-600 dark:text-gray-400 hover:text-red-500"
            >
              <svelte:component this={link.component} size={20} />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div class="h-2 w-full bg-red-500"></div>
</footer>
