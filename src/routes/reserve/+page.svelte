<script>
  import { phone } from 'phone';
  import toast from 'svelte-french-toast';
  import { goto } from '$app/navigation';
  import { reservations } from '$lib/stores';
  import { hours } from '$lib/config';

  let partyName = '';
  let date = '';
  let time = '';
  let email = '';
  let guests = '';
  let specialRequests = '';

  let phoneNum = '';
  let phoneDetails;

  let timeOptions = [];

  function handleSubmit() {
    if (!phoneDetails.isValid) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    reservations.update(value => [
      ...value,
      {
        partyName,
        date,
        time,
        phoneNum,
        email,
        guests,
        specialRequests,
      },
    ]);
    goto(`/reserve/complete?partyName=${partyName}&date=${date}&time=${time}`);
  }

  $: phoneDetails = phone(phoneNum);

  $: if (date) {
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });
    const operatingHours = hours.find(day => day.day === dayOfWeek);

    if (operatingHours) {
      timeOptions = generateTimeOptions(
        operatingHours.hours.open,
        operatingHours.hours.close,
      );
    }
  }

  function generateTimeOptions(open, close) {
    let options = [];
    for (let hour = open; hour <= close; hour++) {
      ['00', '30'].forEach(minute => {
        if (!(hour === close && minute === '30')) {
          // Prevent adding 30 minutes past closing time
          const timeFormat = `${hour % 12 === 0 ? 12 : hour % 12}:${minute} ${hour < 12 || hour === 24 ? 'AM' : 'PM'}`;
          options.push(timeFormat);
        }
      });
    }
    return options;
  }
</script>

<svelte:head>
  <title>Reserve a Table | Game Day Grill</title>
</svelte:head>

<div class="flex-grow flex items-center justify-center dark:bg-neutral-950">
  <div class="max-w-4xl w-full mx-auto px-4">
    <div
      class="bg-white dark:bg-neutral-900 rounded-[25px] shadow-lg p-8 border-2 border-red-500"
    >
      <h2 class="text-3xl font-bold mb-6 text-center dark:text-white">
        Reserve a Table
      </h2>
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div>
          <label
            for="partyName"
            class="block text-gray-700 dark:text-gray-200 font-bold mb-2"
            >Party Name</label
          >
          <input
            id="partyName"
            class="w-full px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter party name"
            type="text"
            required
            bind:value={partyName}
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              for="phone"
              class="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              >Phone Number</label
            >
            <input
              id="phone"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter phone number"
              type="tel"
              title="Please enter a valid phone number."
              required
              bind:value={phoneNum}
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              >Email</label
            >
            <input
              id="email"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter email"
              type="email"
              required
              bind:value={email}
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              for="date"
              class="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              >Select Date</label
            >
            <input
              id="date"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Select date"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              required
              bind:value={date}
            />
          </div>
          <div>
            <label
              for="time"
              class="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              >Select Time</label
            >
            <select
              id="time"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              bind:value={time}
            >
              <option value="" disabled selected>Select time</option>
              {#each timeOptions as timeOption}
                <option value={timeOption}>{timeOption}</option>
              {/each}
            </select>
          </div>
        </div>
        <div>
          <label
            for="guests"
            class="block text-gray-700 dark:text-gray-200 font-bold mb-2"
            >Number of Guests</label
          >
          <select
            id="guests"
            class="appearance-none w-full px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
            bind:value={guests}
          >
            <option value="" disabled selected>Select number of guests</option>
            {#each Array.from({ length: 9 }, (_, i) => i + 1) as number}
              <option value={number}>{number}</option>
            {/each}
            <option value="10+">10+ Please contact Game Day Grill</option>
          </select>
        </div>
        <div>
          <label
            for="requests"
            class="block text-gray-700 dark:text-gray-200 font-bold mb-2"
            >Special Requests</label
          >
          <textarea
            id="requests"
            class="w-full px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter any special requests"
            rows="3"
            bind:value={specialRequests}
          ></textarea>
        </div>
        <button
          class="w-full py-3 px-6 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-colors duration-300"
          type="submit">Reserve Now</button
        >
      </form>
    </div>
  </div>
</div>
