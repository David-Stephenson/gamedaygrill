<script>
  import { bag } from '$lib/stores';
  let bagContent = [];

  import { Dot, X } from 'lucide-svelte';

  bag.subscribe(value => {
    bagContent = value;
  });

  let total = 0;
  let couponCode = '';
  let appliedCoupons = [];
  let disabledButton = true;

  $: {
    // Calculate the total price of the bag
    total = bagContent.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0,
    );

    // Disable the checkout button if the bag is empty
    if (bagContent.length > 0) {
      disabledButton = false;
    } else {
      disabledButton = true;
    }
  }

  function applyCoupon() {
    if (couponCode === 'Chicago' && !appliedCoupons.includes('Chicago')) {
      total *= 0.75;
      appliedCoupons = [...appliedCoupons, 'Chicago'];
      couponCode = '';
    }
  }

  function removeItem(id) {
    console.log(id);
    bag.update(bagContent => {
      return bagContent.filter(item => item.orderId !== id);
    });
  }

  $: {
    console.log(bagContent);
  }
</script>

<svelte:head>
  <title>Bag | Game Day Grill</title>
</svelte:head>

<div class="container mx-auto px-4">
  <div class="flex flex-col md:flex-row">
    <div class="md:w-2/3 md:pr-8">
      {#if bagContent.length === 0}
        <div class="text-center py-8 dark:text-white">
          <h2 class="text-2xl font-semibold mb-4">Your bag is empty!</h2>
          <p class="mb-4">Go to the Menu to fill your roster!</p>
          <a
            href="/menu"
            class="bg-red-500 hover:bg-red-700 text-white py-3 px-6 rounded-full inline-block"
            >Menu</a
          >
        </div>
      {:else}
        <div
          class="bg-white shadow rounded-[25px] border-2 border-red-500 overflow-hidden dark:bg-neutral-800"
        >
          <div
            class="flex px-4 py-2 bg-red-500 text-white font-semibold text-center"
          >
            <div class="w-1/2">Item</div>
            <div class="w-1/6">Price</div>
            <div class="w-1/6">Quantity</div>
            <div class="w-1/6">Total</div>
            <div class="w-1/6">Remove</div>
          </div>
          {#each bagContent as item}
            <div
              class="flex items-center px-4 py-4 border-b dark:border-neutral-700"
            >
              <div class="w-1/2 flex items-center">
                <img
                  src="{item.image}.png"
                  alt={item.name}
                  class="w-16 h-16 object-cover rounded mr-4"
                  loading="lazy"
                />
                <div class="dark:text-white">
                  <!-- Item name -->
                  <p class="font-semibold">{item.name}</p>

                  <!-- Item customization -->
                  {#each Object.entries(item.selectedOptions) as [optionName, selectedValues]}
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span
                        ><b>{optionName}</b>: {Object.keys(selectedValues)
                          .filter(key => selectedValues[key])
                          .join(', ')}
                      </span>
                    </p>
                  {/each}

                  <!-- Item comments -->
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {item.specialInstructions}
                  </p>
                </div>
              </div>
              <div class="w-1/6 text-center dark:text-white">${item.price}</div>
              <div class="w-1/6 text-center dark:text-white">
                {item.quantity}
              </div>
              <div class="w-1/6 text-center dark:text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <div class="w-1/6 text-center">
                <button
                  on:click={() => removeItem(item.orderId)}
                  class="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <X class="w-5 h-5" />
                </button>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
    <div class="md:w-1/3 mt-8 md:mt-0">
      <div
        class="bg-white shadow rounded-[25px] border-2 border-red-500 p-6 dark:bg-neutral-800 dark:text-white"
      >
        <h2 class="text-2xl font-semibold mb-4 text-center">Order Summary</h2>
        <p class="text-xl mb-4">
          <span class="font-semibold">Total:</span> ${total.toFixed(2)}
        </p>
        <div class="mb-6">
          <label for="coupon" class="block mb-2 font-semibold"
            >Coupon Code:</label
          >
          <div class="flex">
            <input
              type="text"
              id="coupon"
              bind:value={couponCode}
              class="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
              placeholder="Enter coupon code"
            />
            <button
              on:click={applyCoupon}
              class="bg-red-500 text-white font-bold py-2 px-4 rounded-r-full hover:bg-red-600"
            >
              Apply
            </button>
          </div>
          {#if appliedCoupons.length > 0}
            <div class="mt-4">
              <p class="font-semibold mb-2">Applied Coupons:</p>
              <ul class="space-y-1">
                {#each appliedCoupons as coupon}
                  <li class="flex items-center">
                    <Dot class="mr-2" />
                    <span>{coupon}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
        <a
          href="/bag/checkout"
          class="bg-red-500 text-white font-bold py-3 px-6 rounded-full block text-center hover:bg-red-600 {disabledButton
            ? 'opacity-50 cursor-not-allowed pointer-events-none'
            : ''}">Proceed to Checkout</a
        >
      </div>
    </div>
  </div>
</div>
