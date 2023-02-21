<script lang="ts">
  let images = [
    {
      id: "0",
      src: "https://source.unsplash.com/random/200x200?sig=1",
    },
    {
      id: "1",
      src: "https://source.unsplash.com/random/200x200?sig=2",
    },
    {
      id: "2",
      src: "https://source.unsplash.com/random/200x200?sig=3",
    },
    {
      id: "3",
      src: "https://source.unsplash.com/random/200x200?sig=4",
    },
  ];

  let activeImage = images[0].src;

  const handleImageClick = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const imageId = target.dataset.thumb;
    activeImage = images[imageId].src;
  };
</script>

<div class="grid grid-cols-5 gap-4">
  <div class="grid gap-4 col-span-1">
    {#each images as image}
      <button on:click={handleImageClick}>
        <img src={image.src} alt="" data-thumb={image.id} />
      </button>
    {/each}
  </div>
  <div class="col-span-4">
    <img class="w-full" src={activeImage} alt="" />
  </div>
</div>
