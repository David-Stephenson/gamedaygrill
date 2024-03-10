<script>
  import { goto } from '$app/navigation';
  import { bag } from '$lib/stores';
  import validate from 'card-validator';

  let bagContent;
  let total = 0;

  bag.subscribe(value => {
    bagContent = value;
    total = bagContent.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0,
    );
  });

  let name = '';
  let email = '';
  let phone = '';
  let cardNumber = '';
  let cardExpiry = '';
  let cardCVV = '';
  let cardDetails;

  function handleSubmit() {
    bag.set([]);
    goto('/bag/checkout/success');
  }

  $: {
    cardDetails = validate.number(cardNumber);
    console.log(cardDetails);
  }
</script>

<svelte:head>
  <title>Checkout | Game Day Grill</title>
</svelte:head>

<section class="flex justify-center items-center py-12">
  <div class="flex flex-wrap -mx-4">
    <div class="w-full px-4 mb-4 lg:mb-0">
      <div
        class="max-w-xl mx-auto py-6 px-4 bg-white rounded-[25px] shadow-md border-2 border-red-500"
      >
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
            <div class="relative">
              <input
                class="w-full pl-10 pr-3 py-2 border rounded text-gray-700"
                placeholder="Card Number"
                type="text"
                required
                bind:value={cardNumber}
              />
              <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <img
                  src="/vectors/cards/{cardDetails.card
                    ? cardDetails.card.type
                    : 'generic'}.svg"
                  alt="Visa"
                  class="h-5 w-5"
                />
              </div>
            </div>

            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="Expiry Date"
              type="month"
              required
              bind:value={cardExpiry}
            />
            <input
              class="w-full px-3 py-2 border rounded text-gray-700"
              placeholder="CVV"
              type="number"
              max="9999"
              on:input={event => {
                const inputValue = event.target.value;
                if (inputValue.length > 4) {
                  event.target.value = inputValue.slice(0, 4);
                }
              }}
              required
              bind:value={cardCVV}
            />
          </div>
          <button
            class="w-full py-2 px-4 bg-red-500 text-white hover:bg-red-600 rounded-full transition-colors duration-150"
            type="submit"
          >
            Complete Purchase
          </button>
        </form>
        <p class="text-center text-xs mt-4">
          * No actual purchase will be made. This is a demo site.
        </p>
      </div>
    </div>
    <div class="w-full lg:w-1/2 px-4"></div>
  </div>
</section>
