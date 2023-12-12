<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount, onDestroy } from 'svelte';
  import { bag } from '$lib/stores.js';

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
    if (quantity > 1){
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
  class={`fixed z-10 inset-0 overflow-y-auto transition-opacity duration-500 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}
>
  <div
    class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span
      class="hidden sm:inline-block sm:align-middle sm:h-screen"
      aria-hidden="true">&#8203;</span
    >

    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 content-center">
        <div class="sm:flex sm:items-start justify-center">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left justify-center">
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

      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          on:click={addFoodToBag}
        >
          Confirm
        </button>
        <button
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          on:click={close}
        >
          Close
        </button>
        
          <button 
          type="button" 
          on:click={decreaseQuantity}
          class="mt-3 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">-</button>
         
          
          <h1 class="justify-center py-2">{quantity}</h1>

          <button 
          type="button" 
          on:click={increaseQuantity}
          class="mt-3 w-full inline-flex rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" >+</button>
         
        
        </div>
    </div>
  </div>
</div>
