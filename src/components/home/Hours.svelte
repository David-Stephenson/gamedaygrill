<script>
	const hours = [
		{ day: 'Monday', open: '8:00 AM', close: '10:00 PM' },
		{ day: 'Tuesday', open: '8:00 AM', close: '10:00 PM' },
		{ day: 'Wednesday', open: '8:00 AM', close: '10:00 PM' },
		{ day: 'Thursday', open: '8:00 AM', close: '10:00 PM' },
		{ day: 'Friday', open: '8:00 AM', close: '11:00 PM' },
		{ day: 'Saturday', open: '9:00 AM', close: '11:00 PM' },
		{ day: 'Sunday', open: '9:00 AM', close: '9:00 PM' }
	];
</script>

<div class="container mx-auto">
	<table class="table-auto w-full">
		<thead>
			<tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
				<th class="py-3 px-6 text-left">Day</th>
				<th class="py-3 px-6 text-left">Opening Time</th>
				<th class="py-3 px-6 text-left">Closing Time</th>
			</tr>
		</thead>
		<tbody class="text-gray-600 text-sm font-light">
			{#each hours as hour (hour.day)}
				<tr class="border-b border-gray-200">
					<td class="py-3 px-6 text-left whitespace-nowrap">{hour.day}</td>
					<td class="py-3 px-6 text-left">{hour.open}</td>
					<td class="py-3 px-6 text-left">{hour.close}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
