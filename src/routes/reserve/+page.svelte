<script>
  import { goto } from '$app/navigation';
  import { reservations } from '$lib/stores';

  let partyName = '';
  let date = '';
  let time = '';

  function handleSubmit() {
    reservations.update(value => [
      ...value,
      {
        partyName,
        date,
        time,
      },
    ]);
    goto(`/reserve/complete?partyName=${partyName}&date=${date}&time=${time}`);
  }
</script>

<svelte:head>
  <title>Reserve a Table | Game Day Grill</title>
</svelte:head>

<div class="flex-grow flex items-center justify-center">
  <div class="max-w-4xl w-full mx-auto px-4">
    <div class="bg-white rounded-[25px] shadow-lg p-8 border-2 border-red-500">
      <h2 class="text-3xl font-bold mb-6 text-center">Reserve a Table</h2>
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div>
          <label for="partyName" class="block text-gray-700 font-bold mb-2"
            >Party Name</label
          >
          <input
            id="partyName"
            class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter party name"
            type="text"
            required
            bind:value={partyName}
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="phone" class="block text-gray-700 font-bold mb-2"
              >Phone Number</label
            >
            <input
              id="phone"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter phone number"
              type="tel"
              title="Please enter a valid phone number."
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 font-bold mb-2"
              >Email</label
            >
            <input
              id="email"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter email"
              type="email"
              required
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="date" class="block text-gray-700 font-bold mb-2"
              >Select Date</label
            >
            <input
              id="date"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Select date"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              required
              bind:value={date}
            />
          </div>
          <div>
            <label for="time" class="block text-gray-700 font-bold mb-2"
              >Select Time</label
            >
            <input
              id="time"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Select time"
              type="time"
              required
              bind:value={time}
            />
          </div>
        </div>

        <div>
          <label for="guests" class="block text-gray-700 font-bold mb-2"
            >Number of Guests</label
          >
          <div class="relative">
            <select
              id="guests"
              class="appearance-none w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="" disabled selected hidden
                >Select number of guests</option
              >
              {#each Array.from({ length: 9 }, (_, i) => i + 1) as number (number)}
                <option value={number}>{number}</option>
              {/each}
              <option value="10+" disabled
                >10+ Please contact Game Day Grill</option
              >
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label for="requests" class="block text-gray-700 font-bold mb-2"
            >Special Requests</label
          >
          <textarea
            id="requests"
            class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter any special requests"
            rows="3"
          ></textarea>
        </div>
        <button
          class="w-full py-3 px-6 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-colors duration-300"
          type="submit"
        >
          Reserve Now
        </button>
      </form>
    </div>
  </div>
</div>
