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

<div class="container mx-auto px-6 py-8">
  {#each Object.keys(menu) as section (section)}
    <div class="mb-8 flex items-center">
      <div class="flex items-center justify-center h-20 w-20">
        <h2 class="text-2xl mb-3 capitalize transform -rotate-90 font-russo">{section}</h2>
      </div>
      <div class="flex flex-wrap justify-start">
        {#each menu[section] as item (item.name)}
          <div class="bg-white shadow-md rounded-lg pb-4 flex flex-col items-center text-center w-64 overflow-hidden m-2">
            <img class="w-full h-40 mb-3 object-cover" src={item.img} alt={item.name} />
            <span class="text-lg font-bold">{item.name}</span>
            <span class="text-lg">{item.price}</span>
            <button
              on:click={() => openModal(item)}
              class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >Open Modal</button
            >
          </div>
        {/each}
      </div>
    </div>
  {/each}
  {#if isOpen}
    <Modal {isOpen} {selectedItem} on:close={closeModal} />
  {/if}
</div>
