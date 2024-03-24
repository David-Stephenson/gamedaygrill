<script>
  import { reservations } from '$lib/stores';

  let reservationDetails = [];

  reservations.subscribe(value => {
    reservationDetails = value;
  });

  // Fake user data
  const user = {
    name: 'BPA Grader',
    memberSince: 'November 2023',
    totalPoints: 100,
    // Sample data for demonstration
    transactions: [
      {
        date: 'Dec 1, 2023',
        points: '+200',
      },
      {
        date: 'Nov 25, 2023',
        points: '+150',
      },
      {
        date: 'Nov 20, 2023',
        points: '-500',
      },
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

<svelte:head>
  <title>Account | Game Day Grill</title>
</svelte:head>

<main class="max-w-5xl mx-auto">
  <!-- User Info Card -->
  <div
    class="bg-white dark:bg-neutral-800 rounded-[25px] shadow-lg p-6 mb-8 flex items-center justify-between border-2 border-red-500"
  >
    <div class="flex items-center space-x-6">
      <picture class="w-20 h-20 rounded-full">
        <source type="image/avif" srcset="/images/account/profile.avif" />
        <source type="image/webp" srcset="/images/account/profile.webp" />
        <img
          src="/images/account/profile.png"
          alt="User Profile"
          class="w-full h-full object-cover rounded-full"
          loading="lazy"
        />
      </picture>
      <div>
        <div class="text-2xl font-bold dark:text-white">{user.name}</div>
        <div class="text-gray-500 dark:text-gray-400">
          MVP Since: {user.memberSince}
        </div>
      </div>
    </div>
    <div class="text-xl font-semibold dark:text-white">
      {user.totalPoints} Points
    </div>
  </div>

  <div class="grid gap-8 md:grid-cols-2">
    <!-- Point Transaction History Card -->
    <div
      class="bg-white dark:bg-neutral-800 rounded-[25px] shadow-lg p-6 border-2 border-red-500"
    >
      <h3 class="text-xl text-center font-semibold mb-4 dark:text-white">
        Point Transaction History
      </h3>
      <div class="overflow-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="border-b dark:border-neutral-700">
              <th
                class="px-4 py-2 text-left font-semibold text-left dark:text-white"
                >Date</th
              >
              <th
                class="px-4 py-2 text-left font-semibold text-left dark:text-white"
                >Points</th
              >
            </tr>
          </thead>
          <tbody>
            {#each user.transactions as transaction}
              <tr class="border-b dark:border-neutral-700">
                <td class="px-4 py-2 dark:text-white">{transaction.date}</td>
                <td class="px-4 py-2">
                  <span
                    class:text-green-500={transaction.points.startsWith('+')}
                    class:text-red-500={!transaction.points.startsWith('+')}
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
    <div
      class="bg-white dark:bg-neutral-800 rounded-[25px] shadow-lg p-6 border-2 border-red-500"
    >
      <h3 class="text-xl text-center font-semibold mb-4 dark:text-white">
        Upcoming Reservations
      </h3>
      <div class="overflow-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="border-b dark:border-neutral-700">
              <th class="px-4 py-2 text-left font-semibold dark:text-white"
                >Party Name</th
              >
              <th class="px-4 py-2 text-left font-semibold dark:text-white"
                >Date</th
              >
              <th class="px-4 py-2 text-left font-semibold dark:text-white"
                >Time</th
              >
            </tr>
          </thead>
          <tbody>
            {#each reservationDetails as reservation}
              <tr class="border-b dark:border-neutral-700">
                <td class="px-4 py-2 dark:text-white"
                  >{reservation.partyName}</td
                >
                <td class="px-4 py-2 dark:text-white">{reservation.date}</td>
                <td class="px-4 py-2 dark:text-white">{reservation.time}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Available Rewards Card -->
    <div
      class="bg-white dark:bg-neutral-800 rounded-[25px] shadow-lg p-6 border-2 border-red-500"
    >
      <h3 class="text-xl text-center font-semibold mb-4 dark:text-white">
        Available Rewards
      </h3>
      <div class="overflow-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="border-b dark:border-neutral-700">
              <th class="px-4 py-2 text-left font-semibold dark:text-white"
                >Reward</th
              >
              <th class="px-4 py-2 text-left font-semibold dark:text-white"
                >Points Required</th
              >
              <th class="px-4 py-2 text-left font-semibold dark:text-white"
                >Expiration Date</th
              >
            </tr>
          </thead>
          <tbody>
            {#each user.rewards as reward}
              <tr class="border-b dark:border-neutral-700">
                <td class="px-4 py-2 text-left dark:text-white"
                  >{reward.reward}</td
                >
                <td class="px-4 py-2 text-left dark:text-white"
                  >{reward.pointsRequired}</td
                >
                <td class="px-4 py-2 text-left dark:text-white"
                  >{reward.expirationDate}</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>
