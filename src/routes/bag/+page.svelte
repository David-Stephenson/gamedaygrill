<script>
  import { bag } from '$lib/stores';
  let bagContent;

  bag.subscribe(value => {
    bagContent = value;
  });

  let total = 0;

  $: total = bagContent.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0,
  );

  $: {
    console.log(bagContent);
    bagContent.forEach(item => {
      console.log(item);
    });
  }
</script>

<svelte:head>
  <title>Bag | Game Day Grill</title>
</svelte:head>
<div class="container mx-auto px-4 py-8">
  <div class="flex flex-col md:flex-row">
    <div class="md:w-2/3 md:pr-8">
      {#if bagContent.length === 0}
        <div class="text-center py-8">
          <h2 class="text-2xl font-semibold mb-4">Your bag is empty!</h2>
          <p class="mb-4">Go to the Menu to add food to your bag.</p>
          <a
            href="/menu"
            class="bg-red-500 hover:bg-red-700 hover:text-white text-white py-2 px-4 rounded-full"
            >Menu</a
          >
        </div>
      {:else}
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {#each bagContent as item}
            <div
              class="bg-white shadow rounded-[25px] border-2 border-red-500 overflow-hidden"
            >
              <div class="p-4">
                <picture
                  class="w-full h-40 rounded-[20px] overflow-hidden mb-4"
                >
                  <source type="image/avif" srcset="{item.image}.avif" />
                  <source type="image/webp" srcset="{item.image}.webp" />
                  <img
                    src="{item.image}.png"
                    alt={item.name}
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
                <h3 class="text-xl font-semibold mb-2">{item.name}</h3>
                <p class="text-gray-500 mb-4">${item.price}</p>
                <div class="mb-4">
                  <p class="font-semibold">Customization:</p>
                  {#each Object.entries(item.selectedOptions) as [optionName, selectedValues]}
                    <p class="text-sm">
                      <b>{optionName}</b>: {JSON.stringify(selectedValues)}
                    </p>
                  {/each}
                </div>
                <div class="mb-4">
                  <p class="font-semibold">Comments:</p>
                  <p class="text-sm">{item.specialInstructions}</p>
                </div>
                <p class="font-semibold">Quantity: {item.quantity}</p>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
    <div class="md:w-1/3">
      <div class="bg-white shadow rounded-[25px] border-2 border-red-500 p-4">
        <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
        <p class="text-xl font-semibold mb-4">Total: ${total.toFixed(2)}</p>
        <div class="mb-4">
          <label for="coupon" class="block mb-2">Coupon Code:</label>
          <input
            type="text"
            id="coupon"
            class="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter coupon code"
          />
        </div>
        <a
          href="/bag/checkout"
          class="bg-red-500 text-white font-bold py-2 px-4 rounded-full block text-center hover:text-white hover:bg-red-600"
          >Checkout</a
        >
      </div>
    </div>
  </div>
</div>
