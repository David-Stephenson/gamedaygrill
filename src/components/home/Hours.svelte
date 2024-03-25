<script>
  import { hours } from '$lib/config.js';

  function formatTime(hour) {
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:00 ${ampm}`;
  }
</script>

<div
  class="flex flex-col h-full bg-white dark:bg-neutral-800 rounded-[25px] shadow-lg overflow-hidden"
>
  <div class="flex bg-red-500 text-white">
    <div class="flex-1 p-2 text-center">Day</div>
    <div class="flex-1 p-2 text-center">Hours</div>
  </div>
  <div class="flex flex-col flex-grow">
    {#each hours as { day, hours: { open, close } }}
      <div class="flex flex-grow border-t border-red-500 dark:border-red-600">
        <div
          class="flex-1 p-2 text-center flex items-center justify-center text-gray-800 dark:text-gray-200"
        >
          {day}
        </div>
        <div
          class="flex-1 p-2 text-center flex items-center justify-center text-gray-800 dark:text-gray-200"
        >
          {formatTime(open)} - {formatTime(close)}
        </div>
      </div>
    {/each}
  </div>
</div>
