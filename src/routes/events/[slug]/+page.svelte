<script>
  import formatDate from '$lib/formatDate';

  export let data;

  $: {
    console.log(data);
  }
</script>

<article>
  <header
    class="relative h-96 w-screen overflow-hidden mx-0 md:-mx-12 2xl:-mx-52"
  >
    <img
      src={data.meta.image}
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="flex absolute z-10 w-full h-full items-center justify-center">
      <hgroup class="text-center flex items-center justify-center">
        <h1 class="text-white text-3xl md:text-7xl font-bold drop-shadow-xl">
          {data.meta.title}
        </h1>
      </hgroup>
    </div>
  </header>

  <!-- Post -->
  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>
