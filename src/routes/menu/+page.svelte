<script>
  import Modal from "$components/menu/Modal.svelte";
  let isOpen = false;
  let selectedItem = null;

  let menu;
  export { menu as data };

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

<div class="container mx-auto px-6 py-8">
  {#each Object.keys(menu) as section (section)}
    <div class="mb-8 flex items-center">
      <div class="flex items-center justify-center h-20 w-20">
        <h2 class="text-2xl mb-3 capitalize transform -rotate-90 font-russo">
          {section}
        </h2>
      </div>
      <div class="flex flex-wrap justify-start">
        {#each menu[section] as item (item.name)}
          <div
            class="bg-white shadow-md rounded-lg pb-4 flex flex-col items-center text-center w-64 overflow-hidden m-2 cursor-pointer"
            on:click={() => openModal(item)}
          >
            <img
              class="w-full h-40 mb-3 object-cover"
              src={item.img}
              alt={item.name}
            />
            <span class="text-lg font-bold">{item.name}</span>
            <span class="text-lg">{item.price}</span>
          </div>
        {/each}
      </div>
    </div>
  {/each}
  {#if isOpen}
    <Modal {isOpen} {selectedItem} on:close={closeModal} />
  {/if}
</div>
