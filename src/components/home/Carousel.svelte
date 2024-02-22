<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css/core';
</script>

<div
  class="h-96 rounded-none md:rounded-[25px] overflow-hidden border-2 border-red-500"
>
  <Splide
    aria-label="My Favorite Images"
    options={{
      type: 'loop',
      arrows: false,
      autoplay: true,
      interval: 7000,
    }}
  >
    <!-- Slide 1 -->
    <SplideSlide>
      <div class="h-96 w-full flex items-center relative">
        <video
          autoplay
          muted
          loop
          id="myVideo"
          class="absolute w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <!-- Display an image as fallback if the video doesn't load -->
          Your browser does not support HTML5 video.
        </video>
        <div
          class="flex flex-col p-5 space-y-4 h-full bg-gray-100 relative justify-center"
        >
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold">Great Food.</h1>
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold">
            Great Sports.
          </h1>
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold">
            Game Day Grill.
          </h1>

          <a
            href="/menu"
            class="bg-red-500 text-white text-center px-5 py-3 rounded-full mt-4 hover:text-white hover:bg-red-600"
          >
            Make An Order
          </a>
        </div>
      </div>
    </SplideSlide>

    <!-- Slide 2 -->
    <SplideSlide>
      <div
        class="relative h-96 w-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center"
        style="background-image: url('/images/banners/football.png');  background-size: cover; background-position: center; background-repeat: no-repeat;"
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="z-10 text-center">
          <h1 class="text-5xl mt-12 md:text-6xl font-bold text-white">
            Friday Football Feast
          </h1>
          <p class=" text-xl md:text-2xl font-semibold text-white mt-4">
            Kickstart your weekend with live football and our special game day
            menu!
          </p>
          <a
            href="/events"
            class="mt-6 my-12 inline-block bg-white text-red-500 px-8 py-3 text-lg font-semibold rounded-[25px] shadow-md hover:bg-red-500 hover:text-white transition-colors duration-200"
          >
            Discover More
          </a>
        </div>
      </div>
    </SplideSlide>

    <!-- Slide 3 -->
    <SplideSlide>
      <div
        class="relative h-96 w-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center"
        style="background-image: url('/images/banners/milkshakes.png');  background-size: cover; background-position: center; background-repeat: no-repeat;"
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="z-10 text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-white">
            Milkshakes that make you go <span
              style="font-family: 'Yellowtail', handwriting;">Mmm...</span
            >
          </h1>
        </div>
      </div>
    </SplideSlide>

    <!-- Slide 4 -->
    <SplideSlide>
      <div
        class="relative h-96 w-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center"
        style="background-image: url('/images/banners/rewards.png'); background-size: cover; background-position: center; background-repeat: no-repeat;"
      >
        <div class="absolute inset-0 bg-black opacity-60"></div>
        <div class="z-10 text-center px-4">
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold text-white shadow-lg"
          >
            Victory Club Rewards
          </h1>
          <p
            class="text-lg md:text-xl lg:text-2xl font-semibold text-white mt-4 shadow"
          >
            Dine & Earn! With every visit, savor delicious meals while accruing
            points towards exciting rewards.
          </p>
          <a
            href="/account"
            class="mt-4 inline-block bg-white text-red-500 px-6 py-3 text-lg lg:text-xl font-semibold rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
          >
            Join
          </a>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</div>
