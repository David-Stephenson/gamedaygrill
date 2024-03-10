<script>
  import { onMount } from 'svelte';

  import { fade, scale } from 'svelte/transition';

  import { bag } from '$lib/stores.js';
  import Card from '$components/menu/Card.svelte';
  import menu from '$lib/menu.js';

  import { createDialog, melt } from '@melt-ui/svelte';
  import { X, Plus, Minus, ShoppingBag } from 'lucide-svelte';

  import { nanoid } from 'nanoid';

  const {
    elements: { overlay, content, title, description, close, portalled },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });

  // Modal Logic
  let selectedOptions = {};
  let selectedItem;
  let specialInstructions = '';
  let quantity = 0;
  let orderId;

  function toggleOption(category, choice, selectMax) {
    if (!selectedOptions[category]) {
      selectedOptions[category] = {};
    }

    if (selectedOptions[category][choice]) {
      delete selectedOptions[category][choice];
    } else {
      if (Object.keys(selectedOptions[category]).length < selectMax) {
        selectedOptions[category][choice] = true;
      } else {
        console.log(
          `Maximum of ${selectMax} selections allowed for ${category}.`,
        );
        return;
      }
    }

    selectedOptions = { ...selectedOptions };
  }

  function updateBag() {
    bag.update(items => {
      const index = items.findIndex(item => item.orderId === orderId);
      if (index === -1) {
        if (quantity !== 0) {
          items.push({
            ...selectedItem,
            selectedOptions,
            specialInstructions,
            quantity,
            orderId,
          });
        }
      } else {
        if (quantity === 0) {
          items.splice(index, 1);
        } else {
          items[index].quantity = quantity;
        }
      }
      return items;
    });
  }

  function openModal(event) {
    selectedOptions = {};
    quantity = 0;
    selectedItem = event.detail;
    orderId = nanoid(); // Generate a new unique ID for the order

    if (event.detail.options) {
      event.detail.options.forEach(option => {
        selectedOptions[option.name] = {};
      });
    }
    $open = true;
  }
</script>

<svelte:head>
  <title>Menu | Game Day Grill</title>
</svelte:head>

<!-- Menu Content -->
<div class="container mx-auto px-6 py-8">
  {#each Object.keys(menu) as section (section)}
    <div class="mb-8">
      <h2 class="text-2xl capitalize font-russo">
        {section}
      </h2>
      <div class="flex flex-wrap -mx-2 justify-center">
        <!-- Added justify-center here -->
        {#each menu[section] as item (item.name)}
          <Card {item} on:modalTrigger={openModal} />
        {/each}
      </div>
    </div>
  {/each}
</div>

<!-- Modal -->
<div class="" use:melt={$portalled}>
  {#if $open}
    <!-- Background -->
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/50"
      transition:fade={{ duration: 250 }}
    />

    <!-- Modal Content -->
    <div
      use:melt={$content}
      class="fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
           w-full max-w-md md:max-w-2xl lg:max-w-4xl max-h-[85vh]
           mx-auto p-6 md:p-6 space-y-4 md:space-y-6
           bg-white rounded-[25px] shadow-xl
           overflow-auto border-2 border-red-500"
      transition:scale={{
        duration: 250,
        opacity: 0.0,
        start: 0.8,
      }}
    >
      <!-- Close button -->
      <button
        use:melt={$close}
        aria-label="close"
        class="absolute right-3 top-3 inline-flex
                items-center justify-center rounded-full p-1 text-red-500
                hover:bg-red-100 focus:shadow-red-500"
      >
        <X size="20" />
      </button>

      <!-- Top -->
      <div class="">
        <h2 class="text-xl md:text-2xl font-semibold" use:melt={$title}>
          {selectedItem.name} • ${selectedItem.price}
        </h2>
        <p class="mt-2 text-sm md:text-base" use:melt={$description}>
          {selectedItem.description}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:flex-1">
          <div class="srounded-[25px] overflow-hidden">
            <picture class="aspect-w-1 aspect-h-1 w-full">
              <source type="image/avif" srcset="{selectedItem.image}.avif" />
              <source type="image/webp" srcset="{selectedItem.image}.webp" />
              <img
                src="{selectedItem.image}.png"
                alt={selectedItem.name}
                class="w-96 object-cover"
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
                      <button
                        class="relative inline-flex items-center justify-center py-2 px-4 rounded-lg transition-colors duration-150 cursor-pointer
                        {selectedOptions[option.name][choice]
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}"
                        on:click={() =>
                          toggleOption(option.name, choice, option.selectMax)}
                      >
                        <span class="ml-2">{choice}</span>
                      </button>
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
                updateBag();
              }}
            >
              <span class="mr-1"><ShoppingBag size="20" /></span> Add to Bag
            </button>
          {:else}
            <div
              class="w-full bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-colors duration-150 flex items-center justify-between"
            >
              <button
                class="focus:outline-none"
                on:click={() => {
                  if (quantity > 0) {
                    quantity -= 1;
                    updateBag();
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
                  updateBag(); // Ensure this function handles quantity updates correctly
                }}
              >
                <Plus size="24" />
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
