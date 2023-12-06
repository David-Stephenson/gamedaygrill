<script>
  // Fake user data
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    memberSince: "January 2023",
    totalPoints: 850,
  };
</script>

<div>
  <main class="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
    <div class="md:grid md:grid-cols-4 gap-6">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-1 lg:col-span-1 xl:col-span-1" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">User Profile</h3></div>
        <div class="p-6 flex flex-col items-center gap-4" id="dwszqeoensc">
          <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24"
            ><span class="flex h-full w-full items-center justify-center rounded-full bg-muted"> JP </span></span
          >
          <div class="font-semibold text-lg md:text-2xl">John Doe</div>
          <div class="text-gray-500 text-sm">johndoe@example.com</div>
          <div class="text-gray-500 text-sm mt-2">Member since: January 2023</div>
          <div class="text-gray-500 text-sm mt-2">Total Points: 🌟850🌟</div>
          <div class="flex flex-col gap-2 mt-2 self-start">
            <button
              class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
            >
              Edit Profile
            </button><button
              class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
            >
              Request New Rewards Card
            </button>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-3 lg:col-span-3 xl:col-span-3" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Transaction History</h3></div>
        <div class="p-6 flex flex-col gap-4">
          <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
              <thead class="[&amp;_tr]:border-b"
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"> Date </th><th
                    class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                  >
                    Description
                  </th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Points
                  </th></tr
                ></thead
              ><tbody class="[&amp;_tr:last-child]:border-0"
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Dec 1, 2023 </td><td
                    class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                  >
                    Dinner at Restaurant A
                  </td><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> +200 </td></tr
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Nov 25, 2023 </td><td
                    class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                  >
                    Lunch at Restaurant B
                  </td><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> +150 </td></tr
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Nov 20, 2023 </td><td
                    class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                  >
                    Redeemed Reward: Free Dessert
                  </td><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> -500 </td></tr
                ></tbody
              >
            </table>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-2 lg:col-span-2 xl:col-span-2" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Available Rewards</h3></div>
        <div class="p-6 flex flex-col gap-4">
          <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
              <thead class="[&amp;_tr]:border-b"
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"> Reward </th><th
                    class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                  >
                    Points Required
                  </th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Expiration Date
                  </th></tr
                ></thead
              ><tbody class="[&amp;_tr:last-child]:border-0"
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Free Dessert </td><td
                    class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                  >
                    500
                  </td><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Dec 31, 2023 </td></tr
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Free Appetizer </td><td
                    class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                  >
                    800
                  </td><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Dec 31, 2023 </td></tr
                ></tbody
              >
            </table>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-2 lg:col-span-2 xl:col-span-2" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Upcoming Reservations</h3></div>
        <div class="p-6 flex flex-col gap-4">
          <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
              <thead class="[&amp;_tr]:border-b"
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"> Date </th><th
                    class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                  >
                    Venue
                  </th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Time
                  </th></tr
                ></thead
              ><tbody class="[&amp;_tr:last-child]:border-0"
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Dec 15, 2023 </td><td
                    class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                  >
                    Restaurant A
                  </td><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> 7:00 PM </td></tr
                ><tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  ><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> Dec 20, 2023 </td><td
                    class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                  >
                    Restaurant B
                  </td><td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> 8:00 PM </td></tr
                ></tbody
              >
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
