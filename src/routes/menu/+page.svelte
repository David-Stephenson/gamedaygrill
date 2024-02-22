<script>
  import Modal from '$components/menu/NewModal.svelte';
  import menu from '$lib/menu.js';

  let isOpen = false;
  let selectedItem = null;

  function openModal(item) {
    selectedItem = item;
    isOpen = true;
  }
</script>

<svelte:head>
  <title>Menu | Game Day Grill</title>
</svelte:head>

<Modal bind:isOpen {selectedItem} />

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
              class="bg-white shadow-md rounded-[25px] px-4 pb-4 flex flex-col items-center overflow-hidden cursor-pointer h-full border-2 border-red-500"
            >
              <img
                class="w-full mb-3 object-cover drop-shadow"
                src={item.image}
                alt={item.name}
              />
              <span class="text-lg font-bold">{item.name}</span>
              <span class="truncate-lines">{item.description}</span>
              <span class="text-lg">{item.price}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .truncate-lines {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Number of lines you want to display */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
