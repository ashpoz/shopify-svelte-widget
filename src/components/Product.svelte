<script lang="ts">
  import Description from "./Description.svelte";
  import Form from "./Form.svelte";
  import ImageGallery from "./ImageGallery.svelte";
</script>

<div class="grid grid-cols-2 gap-4">
  <div>
    <ImageGallery />
  </div>
  <div>
    <Description />
    <Form />
  </div>
</div>
