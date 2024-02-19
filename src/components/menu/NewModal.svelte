<script lang="ts">
  import { createDialog, melt } from '@melt-ui/svelte';
  const {
    elements: { trigger, portalled, overlay, content, close },
    states: { open },
  } = createDialog();
</script>

<button
  use:melt={$trigger}
  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
>
  Open Menu
</button>

<div use:melt={$portalled}>
  {#if $open}
    <div
      use:melt={$overlay}
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
    ></div>
    <div
      use:melt={$content}
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        class="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 space-y-4 overflow-auto"
      >
        <button
          use:melt={$close}
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 float-right"
        >
          Close
        </button>
        <section class="container mx-auto px-4 mt-16">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <div class="border-2 border-red-500 inline-block">
                <img
                  src="/images/menu/appetizers/frenchfries.webp"
                  alt="Ramen dish"
                  class="w-full border-b-2 border-red-500"
                />
                <div class="flex">
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
              <h2 class="text-3xl font-bold mb-2">Miso Ramen with Shrimp</h2>
              <hr />
              <p class="mb-4">
                Wheat noodles, shrimp, sweet pepper, baby corn, peas in pods,
                Curry sauce, Asian Pesto sauce, aromatic oil, Tom Yam broth;
                edamame beans, cashews, peanuts, cilantro, sesame.
              </p>

              <h3 class="text-xl font-bold mb-4">Customize</h3>

              <div class="grid grid-cols-3 gap-2 border-2 border-red-500 p-5">
                <button
                  class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                >
                  onion + $0.50
                </button>
                <button
                  class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                >
                  pepper + $1.00
                </button>
                <button
                  class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                >
                  greenery + $2.50
                </button>
              </div>

              <div class="mt-4">
                <h4 class="text-xl font-bold mb-2">Choose broth</h4>
                <div class="flex items-center space-x-4">
                  <button
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                  >
                    Miso
                  </button>
                  <button
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                  >
                    Shoyu
                  </button>
                  <button
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                  >
                    Spicy Miso
                  </button>
                </div>
              </div>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Add to Cart
              </button>
              <p>$25</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/if}
</div>
