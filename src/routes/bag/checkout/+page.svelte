<script>
  import { goto } from '$app/navigation';
  import { bag } from '$lib/stores';

  let bagContent;
  let total = 0;

  bag.subscribe(value => {
    bagContent = value;
    total = bagContent.reduce(
      (acc, item) => acc + parseFloat(item.price.slice(1)),
      0,
    );
  });

  let name = '';
  let email = '';
  let phone = '';
  let cardNumber = '';
  let cardExpiry = '';
  let cardCVV = '';

  function handleSubmit() {
    goto(`/checkout/complete?name=${name}&email=${email}&phone=${phone}`);
  }
</script>

<svelte:head>
  <title>Checkout | Game Day Grill</title>
</svelte:head>

<section class="flex justify-center items-center py-12">
  <div class="flex flex-wrap -mx-4">
    <div class="w-full px-4 mb-4 lg:mb-0">
      <div class="max-w-xl mx-auto py-6 px-4 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center">Checkout</h2>
        <p class="text-center mb-4">Total: ${total.toFixed(2)}</p>
        <form on:submit|preventDefault={handleSubmit}>
          <div class="mb-4">
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Name"
              type="text"
              required
              bind:value={name}
            />
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Phone Number"
              type="tel"
              required
              bind:value={phone}
            />
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Email"
              type="email"
              required
              bind:value={email}
            />
          </div>
          <div class="grid grid-cols-3 gap-4 mb-4">
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Card Number"
              type="text"
              required
              bind:value={cardNumber}
            />
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Expiry Date"
              type="text"
              required
              bind:value={cardExpiry}
            />
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="CVV"
              type="text"
              required
              bind:value={cardCVV}
            />
          </div>
          <button
            class="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
            type="submit"
          >
            Complete Purchase
          </button>
        </form>
        <p class="text-center text-xs mt-4">
          * Do not put in real credit card info, Salam WILL buy MacBook Pros
        </p>
      </div>
    </div>
    <div class="w-full lg:w-1/2 px-4"></div>
  </div>
</section>
