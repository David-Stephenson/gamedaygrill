<script>
  let hoursData = [
    { day: 'Monday', hours: '11am - 11pm' },
    { day: 'Tuesday', hours: '11am - 11pm' },
    { day: 'Wednesday', hours: '11am - 11pm' },
    { day: 'Thursday', hours: '11am - 11pm' },
    { day: 'Friday', hours: '11am - 1am' },
    { day: 'Saturday', hours: '11am - 1am' },
    { day: 'Sunday', hours: '11am - 10pm' },
  ];
</script>

<div class="flex flex-col h-full">
  <div class="flex bg-red-500 text-white">
    <div class="flex-1 p-2 text-center">Day</div>
    <div class="flex-1 p-2 text-center">Hours</div>
  </div>
  <div class="flex flex-col flex-grow">
    {#each hoursData as { day, hours }}
      <div class="flex flex-grow border-t border-red-500">
        <div class="flex-1 p-2 text-center flex items-center justify-center">
          {day}
        </div>
        <div class="flex-1 p-2 text-center flex items-center justify-center">
          {hours}
        </div>
      </div>
    {/each}
  </div>
</div>
