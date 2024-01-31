<script>
  import { onMount } from 'svelte';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css/core'; // Only core CSS

  let carouselItems = [
    { type: 'video', src: '/videos/hero.mp4', id: 'video-1' },
    {
      type: 'video',
      src: 'https://www.w3schools.com/html/movie.mp4',
      id: 'video-2',
    },
    // Add more videos or images as needed
  ];

  const splideOptions = {
    type: 'loop',
    autoplay: false,
    pauseOnHover: true,
    perPage: 1,
    arrows: false,
    pagination: false,
    gap: '0px',
  };

  let splideRef;

  onMount(() => {
    const splide = splideRef.splide;

    function playCurrentSlideVideo() {
      // Find the active slide
      const activeSlide =
        splide.Components.Elements.list.querySelector('.is-active');

      // Pause all videos
      carouselItems.forEach(item => {
        if (item.type === 'video') {
          const videoElement = document.getElementById(item.id);
          videoElement && videoElement.pause();
        }
      });

      // Play the video in the active slide, if any
      const video = activeSlide ? activeSlide.querySelector('video') : null;
      console.log(video);
      video.play();
      if (video) {
        video.play();
      }
    }

    // Play video on initial load and on slide change
    splide.on('mounted move', playCurrentSlideVideo);
  });
</script>

<div
  class="max-w-screen-xl max-h-[40vh] mx-auto overflow-hidden rounded-[2rem]"
>
  <Splide
    bind:this={splideRef}
    options={splideOptions}
    aria-label="Hero Section"
  >
    {#each carouselItems as item}
      <SplideSlide>
        {#if item.type === 'video'}
          <video id={item.id} class="w-full h-full object-cover" muted loop>
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        {:else}
          <!-- Fallback or other content types -->
        {/if}
      </SplideSlide>
    {/each}
  </Splide>
</div>
