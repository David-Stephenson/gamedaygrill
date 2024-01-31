<script>
  import { information, contact } from '$config';
  import { Menu, Calendar, Info, Phone, ShoppingBag } from 'lucide-svelte';
</script>

<nav class="flex items-center justify-between p-4">
  <div class="text-lg font-bold">Game Day Grill</div>
  <div
    class="mx-auto flex items-center gap-12 py-3 px-4 rounded-full border-[2px] border-red-500"
  >
    <a
      href="/menu"
      class="text-red-600 hover:text-red-800 uppercase flex items-center gap-2"
    >
      <Menu class="w-5 h-5" />Menu
    </a>
    <a
      href="/reservation"
      class="text-red-600 hover:text-red-800 uppercase flex items-center gap-2"
    >
      <Calendar class="w-5 h-5" />Reserve
    </a>
    <a
      href="/about"
      class="text-red-600 hover:text-red-800 uppercase flex items-center gap-2"
    >
      <Info class="w-5 h-5" />About
    </a>
    <a
      href="/contact"
      class="text-red-600 hover:text-red-800 uppercase flex items-center gap-2"
    >
      <Phone class="w-5 h-5" />Contact
    </a>
  </div>

  <ShoppingBag />
</nav>
