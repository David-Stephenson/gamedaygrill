<script>
  // Fake user data
  const user = {
    name: 'John Doe',
    memberSince: 'January 2023',
    totalPoints: 850,
    // Sample data for demonstration
    transactions: [
      {
        date: 'Dec 1, 2023',
        description: 'Dinner at Restaurant A',
        points: '+200',
      },
      {
        date: 'Nov 25, 2023',
        description: 'Lunch at Restaurant B',
        points: '+150',
      },
      {
        date: 'Nov 20, 2023',
        description: 'Redeemed Reward: Free Dessert',
        points: '-500',
      },
    ],
    reservations: [
      { date: 'Dec 10, 2023', venue: 'Restaurant C', time: '7:00 PM' },
      { date: 'Dec 12, 2023', venue: 'Restaurant D', time: '8:00 PM' },
    ],
    rewards: [
      {
        reward: 'Free Dessert',
        pointsRequired: '500',
        expirationDate: 'Dec 31, 2023',
      },
      {
        reward: 'Free Appetizer',
        pointsRequired: '800',
        expirationDate: 'Dec 31, 2023',
      },
    ],
  };
</script>

<div class="p-4">
  <main class=" mx-auto">
    <!-- User Info Card -->
    <div
      class="bg-white rounded-lg shadow-md p-5 mb-6 flex items-center justify-between"
    >
      <div class="flex items-center space-x-4">
        <img
          class="h-16 w-16 rounded-lg"
          src="/images/account/profile.webp"
          alt="User Profile"
        />
        <div>
          <div class="font-semibold text-xl">{user.name}</div>
          <div class="text-gray-500 text-sm">
            Member since: {user.memberSince}
          </div>
        </div>
      </div>
      <div class="text-lg font-semibold">{user.totalPoints} Points</div>
    </div>

    <!-- Cards Container -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Point Transaction History Card -->
      <div class="bg-white rounded-lg shadow-md p-5">
        <h3 class="text-lg font-semibold mb-4">Point Transaction History</h3>
        <div class="overflow-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b text-center">
                <th class="px-2 py-1 text-left">Date</th>
                <th class="px-2 py-1 text-left">Description</th>
                <th class="px-2 py-1 text-left">Points</th>
              </tr>
            </thead>
            <tbody>
              {#each user.transactions as transaction}
                <tr class="border-b">
                  <td class="px-2 py-1">{transaction.date}</td>
                  <td class="px-2 py-1">{transaction.description}</td>
                  <td class="px-2 py-1">
                    <span
                      class:class={transaction.points.startsWith('+')
                        ? 'text-green-500'
                        : 'text-red-500'}
                    >
                      {transaction.points}
                    </span>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Upcoming Reservations Card -->
      <div class="bg-white rounded-lg shadow-md p-5">
        <h3 class="text-lg font-semibold mb-4">Upcoming Reservations</h3>
        <div class="overflow-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="px-2 py-1 text-left">Date</th>
                <th class="px-2 py-1 text-left">Venue</th>
                <th class="px-2 py-1 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {#each user.reservations as reservation}
                <tr class="border-b">
                  <td class="px-2 py-1">{reservation.date}</td>
                  <td class="px-2 py-1">{reservation.venue}</td>
                  <td class="px-2 py-1">{reservation.time}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Available Rewards Card -->
      <div class="bg-white rounded-lg shadow-md p-5">
        <h3 class="text-lg font-semibold mb-4">Available Rewards</h3>
        <div class="overflow-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="px-2 py-1 text-left">Reward</th>
                <th class="px-2 py-1 text-left">Points Required</th>
                <th class="px-2 py-1 text-left">Expiration Date</th>
              </tr>
            </thead>
            <tbody>
              {#each user.rewards as reward}
                <tr class="border-b">
                  <td class="px-2 py-1">{reward.reward}</td>
                  <td class="px-2 py-1">{reward.pointsRequired}</td>
                  <td class="px-2 py-1">{reward.expirationDate}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</div>
