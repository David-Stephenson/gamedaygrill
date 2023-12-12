<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount, onDestroy } from 'svelte';
  import { bag } from '$lib/stores.js';
  import { Plus, Minus } from 'lucide-svelte';

  const dispatch = createEventDispatcher();

  export let isOpen = false;
  export let selectedItem = null;
  let comments = '';
  let quantity = 1;

  function close() {
    dispatch('close');
  }

  function addFoodToBag() {
    const itemWithComments = { ...selectedItem, comments };
    bag.update(items => {
      return [...items, itemWithComments];
    });
    console.log($bag);
    close();
  }

  function increaseQuantity() {
    quantity++;
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      quantity--;
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  });
</script>

<div
  class={`fixed z-50 inset-0 overflow-y-auto ease-out duration-400 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}
>
  <div
    class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <div
      class="inline-block align-middle bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-center sm:justify-center">
          <div class="mt-3 sm:mt-0 sm:ml-4">
            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              class="w-full h-64 object-cover object-center rounded-lg shadow-md"
            />
            <h3 class="text-lg leading-6 font-medium text-gray-900 mt-4">
              Confirming, add {selectedItem.name} to bag
            </h3>
            <div class="mt-2">
              <textarea
                bind:value={comments}
                class="mt-4 w-full p-2 border rounded-md shadow-sm"
                placeholder="Comments/Notes/Special Instructions"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-between">
        <div class="flex items-center">
          <button
            type="button"
            on:click={decreaseQuantity}
            class="w-10 h-10 rounded-md border border-transparent shadow-sm bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >-</button
          >

          <h1 class="mx-2">{quantity}</h1>

          <button
            type="button"
            on:click={increaseQuantity}
            class="w-10 h-10 rounded-md border border-transparent shadow-sm bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >+</button
          >
        </div>

        <div class="flex items-center">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            on:click={addFoodToBag}
          >
            Confirm
          </button>
          <button
            type="button"
            class="ml-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
            on:click={close}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
