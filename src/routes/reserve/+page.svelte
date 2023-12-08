<script>
  import { goto } from "$app/navigation";

  let partyName = "";
  let date = "";
  let time = "";

  function handleSubmit() {
    goto(`/reserve/complete?partyName=${partyName}&date=${date}&time=${time}`);
  }
</script>

<section class="flex justify-center items-center py-12">
  <div class="flex flex-wrap -mx-4">
    <div class="w-ful px-4 mb-4 lg:mb-0">
      <div class="max-w-xl mx-auto py-6 px-4 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center">Reserve a Table</h2>
        <form on:submit|preventDefault={handleSubmit}>
          <div class="mb-4">
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Party Name"
              type="text"
              required
              bind:value={partyName}
            />
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Phone Number"
              type="tel"
              required
            />
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Select Date"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
              bind:value={date}
            />
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Select Time"
              type="time"
              required
              bind:value={time}
            />
          </div>

          <div class="mb-4">
            <div class="relative">
              <select
                class="appearance-none w-full px-3 py-2 border rounded text-gray-700 pr-8"
                required
              >
                <option value="" disabled selected hidden
                  >Select Number of Guests</option
                >
                {#each Array.from({ length: 9 }, (_, i) => i + 1) as number (number)}
                  <option value={number}>{number}</option>
                {/each}
                <option value="10+" disabled
                  >10+ Please contact Game Day Grill</option
                >
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              ></div>
            </div>
          </div>
          <div class="mb-4">
            <textarea
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Special Requests"
              rows="3"
            ></textarea>
          </div>
          <button
            class="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
            type="submit"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
    <div class="w-full lg:w-1/2 px-4"></div>
  </div>
</section>
