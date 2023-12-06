<script>
  import { goto } from "$app/navigation";

  function gotoAccount() {
    goto("/account");
  }
</script>

<section class="bg-gray-100 py-6">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <div class="text-center md:text-left">
        <h2 class="text-2xl font-bold">Victory Club Rewards</h2>
        <p class="mt-2 text-gray-600">Join our rewards program and unlock free food, gifts, and more!</p>
      </div>
      <button class="bg-red-500 text-white px-6 py-3 rounded-full mt-4 md:mt-0" on:click={gotoAccount}>Join Now</button>
    </div>
  </div>
</section>
