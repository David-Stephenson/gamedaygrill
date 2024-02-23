<script>
  import { bag } from '$lib/stores.js';
  import { createDialog, melt } from '@melt-ui/svelte';
  import { X, Plus, Minus } from 'lucide-svelte';
  import { nanoid } from 'nanoid';

  const {
    elements: { portalled, overlay, content },
    states: { open },
  } = createDialog();

  export let selectedItem;
  export let isOpen = false;

  let selectedOptions = {};
  let specialInstructions = '';
  let quantity = 0;
  let orderId = ''; // Unique order ID

  $: isOpen ? open.set(true) : open.set(false);

  $: if (isOpen) {
    specialInstructions = '';
    quantity = 0; // Reset quantity to 0 every time the modal is opened
    orderId = nanoid(); // Generate a new unique ID for the order
    selectedOptions = {};
  }

  function addFoodToBag() {
    if (quantity === 0) return; // Prevent adding to bag if quantity is 0

    bag.update(items => {
      const index = items.findIndex(item => item.orderId === orderId);
      if (index === -1) {
        return [
          ...items,
          {
            ...selectedItem,
            selectedOptions,
            specialInstructions,
            quantity,
            orderId,
          },
        ];
      } else {
        items[index].quantity += quantity;
        return [...items];
      }
    });
  }

  function toggleOption(category, choice, selectMax) {
    const selected = selectedOptions[category] || [];
    const index = selected.indexOf(choice);
    if (index > -1) {
      selected.splice(index, 1);
    } else {
      if (selected.length < selectMax) {
        selected.push(choice);
      } else {
        console.log(
          `Maximum of ${selectMax} selections allowed for ${category}.`,
        );
        return;
      }
    }
    selectedOptions = { ...selectedOptions, [category]: [...selected] };
  }

  function isSelected(category, choice) {
    return selectedOptions[category]?.includes(choice);
  }
</script>

<div use:melt={$portalled}>
  {#if $open}
    <div
      use:melt={$overlay}
      class="fixed inset-0 bg-black bg-opacity-60 z-40"
      on:click={() => {
        isOpen = false;
      }}
    ></div>
    <div
      use:melt={$content}
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      on:click|stopPropagation
    >
      <div
        class="bg-white rounded-[25px] shadow-xl max-w-md md:max-w-2xl lg:max-w-4xl w-full mx-auto p-4 md:p-6 space-y-4 md:space-y-6 overflow-auto relative border-2 border-red-500"
      >
        <button
          on:click={() => {
            isOpen = false;
          }}
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size="24" />
        </button>

        <div class="text-center">
          <h2 class="text-xl md:text-2xl font-semibold">
            {selectedItem.name} • ${selectedItem.price}
          </h2>
          <p class="mt-2 text-sm md:text-base">
            {selectedItem.description}
          </p>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div class="md:flex-1">
            <div class="border-2 border-red-500 rounded-[25px] overflow-hidden">
              <picture class="aspect-w-1 aspect-h-1 w-full">
                <source type="image/avif" srcset="{selectedItem.image}.avif" />
                <source type="image/webp" srcset="{selectedItem.image}.webp" />
                <img
                  src="{selectedItem.image}.png"
                  alt={selectedItem.name}
                  class="w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          <div class="md:flex-1 space-y-4">
            {#if selectedItem.options}
              <div class="space-y-2">
                {#each selectedItem.options as option (option.name)}
                  <div>
                    <h3 class="text-lg font-semibold">{option.name}</h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {#each option.choices as choice (choice)}
                        <label
                          class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-150 flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={isSelected(option.name, choice)}
                            on:change={() =>
                              toggleOption(
                                option.name,
                                choice,
                                option.selectMax,
                              )}
                            class="mr-2"
                          />
                          {choice}
                        </label>
                      {/each}
                    </div>
                  </div>
                {/each}
              </div>
            {/if}

            <textarea
              bind:value={specialInstructions}
              class="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Special instructions, notes, comments..."
              rows="3"
            ></textarea>

            {#if quantity == 0}
              <button
                class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-150 flex items-center justify-center"
                on:click={() => {
                  quantity = 1;
                  addFoodToBag();
                }}
              >
                Add to Bag
              </button>
            {:else}
              <div
                class="w-full bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-colors duration-150 flex items-center justify-between"
              >
                <button
                  class="focus:outline-none"
                  on:click={() => {
                    if (quantity > 1) {
                      quantity -= 1;
                    } else {
                      quantity = 0; // Allow quantity to go back to 0
                    }
                  }}
                >
                  <Minus size="24" />
                </button>
                <span class="mx-auto">
                  {quantity}
                </span>
                <button
                  class="focus:outline-none"
                  on:click={() => {
                    quantity += 1;
                  }}
                >
                  <Plus size="24" />
                </button>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
