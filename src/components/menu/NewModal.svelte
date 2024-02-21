<script>
  import { createDialog, melt } from '@melt-ui/svelte';

  const {
    elements: { trigger, portalled, overlay, content, close },
    states: { open },
  } = createDialog();

  export let selectedItem;
  export let isOpen = false;

  $: isOpen ? open.set(true) : open.set(false);
</script>

<div use:melt={$portalled}>
  {#if $open}
    <div
      use:melt={$overlay}
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
    ></div>
    <div
      use:melt={$content}
      class="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4"
    >
      <div
        class="bg-white rounded-lg shadow-lg max-w-lg md:max-w-4xl w-full mx-2 md:p-6 p-4 space-y-4 overflow-auto"
      >
        <!-- <button
          on:click={() => {
            isOpen = false;
          }}
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 float-right"
        >
          Close
        </button> -->
        <section class="mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <div class="border-2 border-red-500 inline-block">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  class="w- border-b-2 border-red-500"
                />
                <div class="flex flex-wrap">
                  <div class="flex-1 border-r-2 border-red-500 p-2">
                    <p class="font-bold">Proteins</p>
                    <p>6.2 g</p>
                  </div>
                  <div class="flex-1 border-r-2 border-red-500 p-2">
                    <p class="font-bold">Fats</p>
                    <p>8.3 g</p>
                  </div>
                  <div class="flex-1 border-r-2 border-red-500 p-2">
                    <p class="font-bold">Carbohydrates</p>
                    <p>28.6 g</p>
                  </div>
                  <div class="flex-1 p-2">
                    <p class="font-bold">Calories</p>
                    <p>213.7 kcal</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl font-bold">
                {selectedItem.name}
              </h2>
              <hr />
              <p class="mb-4">
                {selectedItem.description}
              </p>

              {#if selectedItem.options}
                {#each selectedItem.options as option (option)}
                  <h3 class="text-xl font-bold mb-1 mt-3">{option.name}</h3>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {#each option.choices as choice (choice)}
                      <button
                        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                      >
                        {choice}
                      </button>
                    {/each}
                  </div>
                {/each}
              {/if}

              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Add to Cart
              </button>
              <p>{selectedItem.price}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/if}
</div>
