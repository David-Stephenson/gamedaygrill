<script>
  import Modal from '$components/menu/NewModal.svelte';
  import menu from '$lib/menu.js';

  let isOpen = false;
  let selectedItem = null;

  // let menu;
  // export { menu as data };

  function openModal(item) {
    selectedItem = item;
    isOpen = true;
  }

  function closeModal() {
    isOpen = false;
  }
</script>

<svelte:head>
  <title>Menu | Game Day Grill</title>
</svelte:head>

<Modal />

<div class="container mx-auto px-6 py-8">
  {#each Object.keys(menu) as section (section)}
    <div class="mb-8">
      <h2 class="text-2xl mb-3 capitalize font-russo">
        {section}
      </h2>
      <div class="flex flex-wrap -mx-2">
        {#each menu[section] as item (item.name)}
          <div
            class="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            on:click={() => openModal(item)}
          >
            <div
              class="bg-white shadow-md rounded-lg px-4 pb-4 flex flex-col items-center overflow-hidden cursor-pointer h-full"
            >
              <img
                class="w-full mb-3 object-cover drop-shadow"
                src={item.image}
                alt={item.name}
              />
              <span class="text-lg font-bold">{item.name}</span>
              <span>{item.description}</span>
              <span class="text-lg">{item.price}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
