<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css/core';
</script>

<div
  class="h-96 rounded-none md:rounded-[25px] overflow-hidden border-2 border-red-500 mt-4"
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
        </video>
        <div
          class="flex flex-col p-5 space-y-4 h-full bg-gradient-to-r from-black from-10% to-transparent relative justify-center"
        >
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-white">
            Great Food.
          </h1>
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-white">
            Great Sports.
          </h1>
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-white">
            Game Day Grill.
          </h1>

          <a
            href="/menu"
            class="bg-red-500 text-white text-center px-5 py-3 rounded-full mt-4 hover:bg-red-600"
          >
            Make An Order
          </a>
        </div>
      </div>
    </SplideSlide>

    <!-- Slide 2 -->
    <SplideSlide>
      <div class="relative h-96 w-full flex items-center justify-center">
        <picture class="absolute inset-0 w-full h-full">
          <source
            type="image/avif"
            srcset="/images/home/banners/national-salad-day.avif"
          />
          <source
            type="image/webp"
            srcset="/images/home/banners/national-salad-day.webp"
          />
          <img
            src="/images/home/banners/national-salad-day.png"
            alt="National Salad Day"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </picture>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
        ></div>
        <div class="z-10 text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-white drop-shadow-xl">
            National Salad Day
          </h1>
          <p
            class="text-xl md:text-2xl font-semibold text-white mt-4 drop-shadow-lg"
          >
            Join us on May 1st for a celebration of fresh flavors!
          </p>
          <a
            href="/events"
            class="mt-8 inline-block bg-green-500 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </SplideSlide>

    <!-- Slide 3 -->
    <SplideSlide>
      <div class="relative h-96 w-full flex items-center justify-center">
        <picture class="absolute inset-0 w-full h-full">
          <source
            type="image/avif"
            srcset="/images/home/banners/milkshakes.avif"
          />
          <source
            type="image/webp"
            srcset="/images/home/banners/milkshakes.webp"
          />
          <img
            src="/images/home/banners/milkshakes.png"
            alt="Milkshakes"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </picture>
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
      <div class="relative h-96 w-full flex items-center justify-center">
        <picture class="absolute inset-0 w-full h-full">
          <source
            type="image/avif"
            srcset="/images/home/banners/rewards.avif"
          />
          <source
            type="image/webp"
            srcset="/images/home/banners/rewards.webp"
          />
          <img
            src="/images/home/banners/rewards.png"
            alt="Victory Club Rewards"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </picture>
        <div class="absolute inset-0 bg-black opacity-60"></div>
        <div class="z-10 text-center px-4">
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
          >
            Victory Club Rewards
          </h1>
          <p
            class="text-lg md:text-xl lg:text-2xl font-semibold text-white mt-4 drop-shadow"
          >
            Dine & Earn! With every visit, savor delicious meals while accruing
            points towards exciting rewards.
          </p>
          <a
            href="/account"
            class="mt-4 inline-block bg-white text-red-500 px-6 py-3 text-lg lg:text-xl font-semibold rounded-full drop-shadow-md hover:bg-red-500 transition-colors duration-300 ease-in-out"
          >
            Join
          </a>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</div>
