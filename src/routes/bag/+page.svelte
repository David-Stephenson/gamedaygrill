<script>
  import { bag } from '$lib/stores';
  let bagContent;

  bag.subscribe(value => {
    bagContent = value;
    console.log(bagContent);
  });

  let total = 0;


  $: total = bagContent.reduce(
    (acc, item) => acc + parseFloat(item.price.slice(1)),
    0,
  );

  function addToBag() {
    bag.update(items => {
      return [...items, itemWithComments];
    });
  }
</script>

<div class="container mx-auto px-4 sm:px-8">
  <div class="py-8">
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Comments
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {#each bagContent as item}
              <tr>
                <td
                  class="px-5 py-5 border-b border-gray-200 bg-white text-base"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-20 h-20">
                      <img
                        class="w-full h-full rounded-full"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  class="px-5 py-5 border-b border-gray-200 bg-white text-base"
                >
                  <p class="text-gray-900 whitespace-no-wrap">{item.price}</p>
                </td>
                <td
                  class="px-5 py-5 border-b border-gray-200 bg-white text-base"
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {item.comments}
                  </p>
                </td>
                <td
                  class="px-5 py-5 border-b border-gray-200 bg-white text-base"
                >
                  <p class="text-gray-900 whitespace-no-wrap">{item.quantity}</p>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        {#if bagContent.length === 0}
          <div class="text-center py-8">
            <h2 class="text-2xl font-semibold mb-4">Your bag is empty!</h2>
            <p class="mb-4">Go to the Menu to add food to your bag.</p>
            <a
              href="/menu"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >Menu</a
            >
          </div>
        {:else}
          <div class="text-right py-4 pr-4">
            <p class="text-2xl font-semibold">Total: ${total.toFixed(2)}</p>
            <a
              href="/bag/checkout"
              class="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
              >Checkout</a
            >
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
