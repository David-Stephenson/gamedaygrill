<script>
  const benefits = [
    {
      title: 'Earn Grill Points',
      description: 'Earn 1 Grill Point for every $1 spent on food and drinks.',
      icon: 'fas fa-trophy',
      image: '/images/rewards/points.jpg',
    },
    {
      title: 'Redeem Rewards',
      description:
        'Redeem Grill Points for free appetizers, entrees, and more!',
      icon: 'fas fa-gift',
      image: '/images/rewards/rewards.jpg',
    },
    {
      title: 'Exclusive Offers',
      description: 'Get access to MVP-only deals and promotions.',
      icon: 'fas fa-tag',
      image: '/images/rewards/server.jpg',
    },
    {
      title: 'Birthday Treat',
      description: 'Enjoy a free dessert on your birthday.',
      icon: 'fas fa-birthday-cake',
      image: '/images/rewards/birthday.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'Cody H.',
      quote:
        "I love the MVP Rewards program! It's so easy to earn Grill Points and redeem them for my favorite dishes.",
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Iker V.',
      quote:
        "The exclusive offers for MVPs are amazing. I've saved so much money since joining the program.",
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
  ];

  const faqItems = [
    {
      question: 'How do I join the MVP Rewards program?',
      answer:
        'You can join the MVP Rewards program by signing up at any Game Day Grill location or online through our website. Membership is free, and you can start earning Grill Points right away!',
    },
    {
      question: 'How do I earn Grill Points?',
      answer:
        'You earn 1 Grill Point for every $1 spent on food and drinks at Game Day Grill. Be sure to provide your MVP Rewards member number when placing your order to earn points.',
    },
    {
      question: 'How do I redeem my Grill Points?',
      answer:
        "You can redeem your Grill Points for free appetizers, entrees, and more at any Game Day Grill location. Simply let your server know that you'd like to redeem your points when placing your order.",
    },
  ];
</script>

<svelte:head>
  <title>MVP Rewards | Game Day Grill</title>
</svelte:head>

<main class="container mx-auto px-4 py-12">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-6 text-red-600">
      Join Our MVP Rewards Program
    </h1>
    <p class="text-xl mb-10 text-gray-700">
      Sign up now and start earning Grill Points towards free food and exclusive
      offers!
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each benefits as benefit}
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
        <img
          class="w-full h-72 object-cover object-center"
          src={benefit.image}
          alt={benefit.title}
        />
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-4 text-red-600">{benefit.title}</h2>
          <p class="text-gray-700">{benefit.description}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-16">
    <h2 class="text-3xl font-bold mb-8 text-red-600 text-center">
      How It Works
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-red-100 rounded-3xl p-8">
        <h3 class="text-2xl font-bold mb-4 text-red-600">Step 1: Sign Up</h3>
        <p class="text-gray-700">
          Sign up for our MVP Rewards program at Game Day Grill or online.
          Membership is free, and you can start earning Grill Points right away!
        </p>
      </div>
      <div class="bg-red-100 rounded-3xl p-8">
        <h3 class="text-2xl font-bold mb-4 text-red-600">
          Step 2: Earn Points
        </h3>
        <p class="text-gray-700">
          Earn 1 Grill Point for every $1 spent on food and drinks at Game Day
          Grill. Be sure to provide your MVP Rewards member number when placing
          your order.
        </p>
      </div>
      <div class="bg-red-100 rounded-3xl p-8">
        <h3 class="text-2xl font-bold mb-4 text-red-600">
          Step 3: Redeem Rewards
        </h3>
        <p class="text-gray-700">
          Redeem your Grill Points for free appetizers, entrees, and more at any
          Game Day Grill location. Simply let your server know that you'd like
          to redeem your points when placing your order.
        </p>
      </div>
      <div class="bg-red-100 rounded-3xl p-8">
        <h3 class="text-2xl font-bold mb-4 text-red-600">Step 4: Enjoy!</h3>
        <p class="text-gray-700">
          Enjoy your rewards and keep earning Grill Points every time you dine
          at Game Day Grill. The more you visit, the more rewards you'll earn!
        </p>
      </div>
    </div>
  </div>

  <div class="mt-16">
    <h2 class="text-3xl font-bold mb-8 text-red-600 text-center">
      What Our MVPs Say
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each testimonials as testimonial}
        <div class="bg-red-100 rounded-3xl p-8 flex items-center space-x-6">
          <img
            class="w-20 h-20 rounded-full"
            src={testimonial.avatar}
            alt={testimonial.name}
          />
          <div>
            <p class="text-xl mb-4 text-gray-800">{testimonial.quote}</p>
            <p class="font-bold text-red-600">{testimonial.name}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="mt-16">
    <h2 class="text-3xl font-bold mb-8 text-red-600 text-center">
      Frequently Asked Questions
    </h2>
    <div class="space-y-6">
      {#each faqItems as faqItem}
        <div class="bg-red-100 rounded-3xl p-8">
          <h3 class="text-2xl font-bold mb-4 text-red-600">
            {faqItem.question}
          </h3>
          <p class="text-gray-700">{faqItem.answer}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="mt-16 text-center">
    <a
      href="#"
      class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full inline-block text-xl"
    >
      Become an MVP Now
    </a>
  </div>
</main>
