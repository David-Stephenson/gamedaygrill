<script>
  import { goto } from '$app/navigation';
  import { bag } from '$lib/stores';
  import validate from 'card-validator';
  import toast from 'svelte-french-toast';
  import { phone } from 'phone';

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
  let phoneNum = '';
  let cardNumber = '';
  let cardExpiry = '';
  let cardCVV = '';
  let cardDetails;
  let phoneDetails;

  function handleSubmit() {
    if (!phoneDetails.isValid) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    bag.set([]);
    goto('/bag/checkout/success');
  }

  $: {
    cardDetails = validate.number(cardNumber);
    phoneDetails = phone(phoneNum);
  }
</script>

<svelte:head>
  <title>Checkout | Game Day Grill</title>
</svelte:head>

<div class="flex-grow flex items-center justify-center">
  <div class="max-w-4xl w-full mx-auto py-12 px-4">
    <div class="bg-white rounded-[25px] shadow-lg p-8 border-2 border-red-500">
      <h2 class="text-3xl font-bold text-center">Checkout</h2>
      <p class="text-xl text-center mb-8">Total: ${total.toFixed(2)}</p>
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <!-- Full name -->
        <div>
          <label for="name" class="block text-gray-700 font-bold mb-2"
            >Full Name</label
          >
          <input
            id="name"
            class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your full name"
            type="text"
            required
            bind:value={name}
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Phone number -->
          <div>
            <label for="phone" class="block text-gray-700 font-bold mb-2"
              >Phone Number</label
            >
            <input
              id="phone"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your phone number"
              type="tel"
              title="Please enter a valid phone number."
              required
              bind:value={phoneNum}
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-gray-700 font-bold mb-2"
              >Email</label
            >
            <input
              id="email"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              type="email"
              required
              bind:value={email}
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card Number -->
          <div>
            <label for="cardNumber" class="block text-gray-700 font-bold mb-2"
              >Card Number</label
            >
            <div class="relative">
              <input
                id="cardNumber"
                class="w-full pl-12 pr-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your card number"
                type="text"
                required
                bind:value={cardNumber}
              />

              <!-- Card icon/logo -->
              <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                <img
                  src="/vectors/cards/{cardDetails.card
                    ? cardDetails.card.type
                    : 'generic'}.svg"
                  alt="Card"
                  class="h-6 w-6"
                />
              </div>
            </div>
          </div>

          <!-- Expiration month -->
          <div>
            <label for="cardExpiry" class="block text-gray-700 font-bold mb-2"
              >Expiry Date</label
            >
            <input
              id="cardExpiry"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="MM/YY"
              type="month"
              required
              bind:value={cardExpiry}
            />
          </div>

          <!-- CVV -->
          <div>
            <label for="cardCVV" class="block text-gray-700 font-bold mb-2"
              >CVV</label
            >
            <input
              id="cardCVV"
              class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter CVV"
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
        </div>

        <!-- Submit button -->
        <button
          class="w-full py-3 px-6 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-colors duration-300"
          type="submit"
        >
          Complete Purchase
        </button>
      </form>
      <p class="text-center text-sm mt-4 text-gray-500">
        By proceeding with payment, you authorize Game Day Grill to bill your
        selected card for the amount of this transaction.
      </p>
    </div>
  </div>
</div>
