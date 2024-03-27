<script>
  import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Phone,
    MapPin,
    Mail,
  } from 'lucide-svelte';
  import { information, contact } from '$config';
  import Logo from '$components/global/Logo.svelte';

  // Social icons links that will be displayed in the footer
  const socialLinks = {
    Facebook: { component: Facebook, url: 'https://www.facebook.com' },
    Twitter: { component: Twitter, url: 'https://www.twitter.com' },
    Instagram: { component: Instagram, url: 'https://www.instagram.com' },
    Linkedin: { component: Linkedin, url: 'https://www.linkedin.com/' },
  };
</script>

<footer
  class="z-10 bg-gray-100/50 text-gray-800 backdrop-blur dark:bg-neutral-800/40 dark:text-white"
>
  <!-- Name and slogan -->
  <div class="container px-4 py-8 mx-auto">
    <div class="grid grid-cols-1 gap-8 items-center md:grid-cols-3">
      <div class="flex items-center justify-center space-x-2 md:justify-start">
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

      <!-- General information -->
      <nav class="flex flex-col items-center space-y-2">
        <a
          class="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 dark:text-gray-400"
          href="tel:{contact.phone}"
        >
          <Phone size="16" /><span>{contact.phone}</span>
        </a>
        <a
          class="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 dark:text-gray-400"
          href="mailto:{contact.email}"
        >
          <Mail size="16" /><span>{contact.email}</span>
        </a>
        <a
          class="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 dark:text-gray-400"
          href="#"
        >
          <MapPin size="16" /><span>{contact.address}</span>
        </a>
      </nav>

      <!-- Social media icons -->
      <nav class="flex justify-center md:justify-end">
        <div class="flex space-x-4">
          {#each Object.entries(socialLinks) as [name, link]}
            <a
              href={link.url}
              class="text-gray-600 hover:text-red-500 dark:text-gray-400"
            >
              <svelte:component this={link.component} size={20} />
            </a>
          {/each}
        </div>
      </nav>
    </div>
  </div>
  <div class="w-full h-2 bg-red-500" />
</footer>
