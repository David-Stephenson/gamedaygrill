<svelte:head>
  <title>About | Game Day Grill</title>
</svelte:head>

<div class="container mx-auto px-4 pt-4">
  <div
    class="mb-12 relative shadow-lg rounded-[25px] border-2 border-red-500 overflow-hidden"
  >
    <img
      src="/images/about/exterior.jpg"
      alt="Game Day Grill restaurant exterior"
      class="w-full h-96 object-cover"
      loading="lazy"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <h1
        class="text-4xl md:text-6xl font-bold text-white text-center z-10 dropshadow-lg"
      >
        About Us
      </h1>
    </div>
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"
      ></div>
    </div>
  </div>

  <div class="mb-12">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-red-500">Our Story</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Founded in 2014 by sports enthusiast and culinary expert, John Doe, Game
      Day Grill was born out of a passion for creating a unique dining
      experience that combines the excitement of live sports with delicious,
      high-quality food. John's vision was to establish a restaurant that would
      become a favorite among locals and visitors alike in Dublin, Ohio.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed">
      Over the years, our commitment to providing an unparalleled sports viewing
      experience, exceptional service, and mouth-watering dishes has earned us a
      loyal following and a reputation as the go-to spot for game day gatherings
      and memorable dining experiences. We take pride in being a part of the
      Dublin community and creating a welcoming atmosphere for sports fans and
      food lovers alike.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center text-red-500">
      What Sets Us Apart
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="text-center">
        <img
          src="/images/about/interior.jpg"
          alt="State-of-the-art screens"
          class="w-full h-80 md:h-96 object-cover object-center rounded-[25px] mb-4"
          loading="lazy"
        />
        <h3 class="text-xl md:text-2xl font-bold mb-2 text-red-500">
          Immersive Viewing Experience
        </h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          With our state-of-the-art screens and immersive sound system, you'll
          feel like you're right in the middle of the action. We feature the
          latest technology to ensure you never miss a moment of your favorite
          games.
        </p>
      </div>
      <div class="text-center">
        <img
          src="/images/about/john-doe.jpg"
          alt="Expert chefs"
          class="w-full h-80 md:h-96 object-cover object-center rounded-[25px] mb-4"
          loading="lazy"
        />
        <h3 class="text-xl md:text-2xl font-bold mb-2 text-red-500">
          Culinary Excellence
        </h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          Our expert chefs craft a wide range of mouthwatering dishes, from
          classic grill favorites to innovative creations, using only the
          freshest, locally-sourced ingredients. We take pride in offering a
          diverse menu that caters to various tastes and dietary preferences.
        </p>
      </div>
      <div class="text-center">
        <img
          src="/images/about/service.jpg"
          alt="Unparalleled service"
          class="w-full h-80 md:h-96 object-cover object-center rounded-[25px] mb-4"
          loading="lazy"
        />
        <h3 class="text-xl md:text-2xl font-bold mb-2 text-red-500">
          Exceptional Service
        </h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          Our friendly and attentive staff is dedicated to ensuring that every
          visit to Game Day Grill is a memorable one. From the moment you walk
          through our doors, you'll experience warm hospitality and a genuine
          commitment to your satisfaction.
        </p>
      </div>
      <div class="text-center">
        <img
          src="/images/about/community.jpg"
          alt="Community involvement"
          class="w-full h-80 md:h-96 object-cover object-center rounded-[25px] mb-4"
          loading="lazy"
        />
        <h3 class="text-xl md:text-2xl font-bold mb-2 text-red-500">
          Community Involvement
        </h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          We believe in being an active part of the Dublin community. We
          regularly sponsor local sports teams, participate in charity events,
          and host fundraisers to support various causes. We're proud to
          contribute to the vibrant spirit of Dublin and give back to the
          community that has embraced us.
        </p>
      </div>
    </div>
  </div>

  <div class="text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-red-500">
      Visit Us Today!
    </h2>
    <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
      Experience the excitement, savor the flavors, and create unforgettable
      memories at Game Day Grill. Your table is waiting!
    </p>
    <a
      href="/reserve"
      class="inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-[25px] shadow-lg hover:bg-red-600 transition-colors mb-4"
    >
      Book Your Table Now
    </a>
  </div>
</div>
