<script>
  import { bag } from '$lib/stores';
  let bagContent;

  bag.subscribe(value => {
    bagContent = value;
    console.log(bagContent);
  });
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
            {#each bagContent as item }
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
                  <p class="text-gray-900 whitespace-no-wrap">1</p>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
