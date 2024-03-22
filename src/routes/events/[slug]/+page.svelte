<script>
  import formatDate from '$lib/formatDate';
  export let data;
</script>

<article>
  <header
    class="relative h-96 w-full rounded-none md:rounded-[25px] overflow-hidden border-2 border-red-500 mt-4"
  >
    <picture class="w-full h-full rounded-full">
      <source type="image/avif" srcset="{data.meta.image}.avif" />
      <source type="image/webp" srcset="{data.meta.image}.webp" />
      <img
        src="{data.meta.image}.png"
        alt="Header"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </picture>

    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="flex absolute z-10 w-full h-full items-center justify-center">
      <hgroup class="text-center flex flex-col items-center justify-center">
        <h1 class="text-white text-3xl md:text-7xl font-bold drop-shadow-xl">
          {data.meta.title}
        </h1>
        <h2
          class="text-white text-3xl md:text-3xl font-bold drop-shadow-xl mt-5"
        >
          {formatDate(data.meta.date)}
        </h2>
      </hgroup>
    </div>
  </header>

  <!-- Post -->
  <div class="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div class="prose prose-lg mx-auto">
      <svelte:component this={data.content} />
    </div>
  </div>
</article>
