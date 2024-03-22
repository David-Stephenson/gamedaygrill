<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let item;
</script>

<div
  class="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
  on:click={() => dispatch('modalTrigger', item)}
>
  <div
    class="bg-white shadow-md rounded-[25px] px-4 pb-4 flex flex-col items-center overflow-hidden cursor-pointer h-full border-2 border-red-500"
  >
    <picture class="w-full mb-3 object-cover drop-shadow">
      <source type="image/avif" srcset="{item.image}.avif" />
      <source type="image/webp" srcset="{item.image}.webp" />
      <img
        src="{item.image}.png"
        alt={item.name}
        class="w-full object-cover"
        loading="lazy"
      />
    </picture>
    <span class="text-lg font-bold text-center">{item.name}</span>
    <p class="text-lg text-center">${item.price}</p>
    <span class="truncate-lines">{item.description}</span>
  </div>
</div>

<style>
  .truncate-lines {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
