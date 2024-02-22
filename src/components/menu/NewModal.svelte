<script>
  import { createDialog, melt } from '@melt-ui/svelte';
  import { X } from 'lucide-svelte';

  const {
    elements: { trigger, portalled, overlay, content, close },
    states: { open },
  } = createDialog();

  export let selectedItem;
  export let isOpen = false;

  let selectedOptions = {};

  $: isOpen ? open.set(true) : open.set(false);

  // Function to handle option selection
  function toggleOption(category, choice, selectMax) {
    const selected = selectedOptions[category] || [];
    const index = selected.indexOf(choice);
    if (index > -1) {
      // Remove if already selected
      selected.splice(index, 1);
    } else {
      // Check against dynamic selectMax
      if (selected.length < selectMax) {
        selected.push(choice); // Add if not present and within selectMax limit
      } else {
        // Handle case where selection exceeds selectMax
        console.log(
          `Maximum of ${selectMax} selections allowed for ${category}.`,
        );
        return; // Optionally notify the user
      }
    }
    selectedOptions = { ...selectedOptions, [category]: [...selected] }; // Update the reactive variable
  }

  // Check if an option is selected
  function isSelected(category, choice) {
    return selectedOptions[category]?.includes(choice);
  }

  $: {
    console.log(selectedOptions);
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
        class="bg-white rounded-[25px] shadow-xl max-w-lg md:max-w-4xl w-full mx-auto p-6 space-y-6 overflow-auto relative"
      >
        <!-- Close button overlaying everything -->
        <button
          on:click={() => {
            isOpen = false;
          }}
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size="24" />
        </button>

        <!-- Title and description -->
        <h2 class="text-2xl md:text-3xl font-semibold">
          {selectedItem.name}
        </h2>
        <p class="mb-4">
          {selectedItem.description}
        </p>

        <!-- Image and options content -->
        <div class="flex flex-col md:flex-row items-center">
          <div class="flex flex-1 justify-center items-center mb-4 md:mb-0">
            <div class="border-4 border-red-500 rounded-[25px]">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                class="w-full md:w-96 rounded-lg object-cover"
              />
            </div>
          </div>

          <div class="flex-1">
            {#if selectedItem.options}
              {#each selectedItem.options as option (option.name)}
                <h3 class="text-xl font-semibold my-2">{option.name}</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {#each option.choices as choice (choice)}
                    <label
                      class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-150 flex items-center"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected(option.name, choice)}
                        on:change={() =>
                          toggleOption(option.name, choice, option.selectMax)}
                      />
                      <span class="ml-2">{choice}</span>
                    </label>
                  {/each}
                </div>
              {/each}
            {/if}

            <div class="flex justify-between items-center mt-6">
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-150"
              >
                Add to Cart
              </button>
              <p class="text-xl font-semibold">{selectedItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
