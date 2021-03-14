<script>
  export let info = {};
  const showSingleImage = info.imgs.length > 0 && info.imgs.length < 3;
  const showMultiImage = info.imgs.length >= 3;
</script>

<style type="text/scss">
  @import "./index.scss";
</style>

<section class="cell">
  <div class="cell-content" class:cell-content-between={showSingleImage}>
    <div class="cell-content-title">{info.title}</div>
    <div class="cell-content-aside">
      <span>{info.source}</span>
      <span>{info.time}</span>
    </div>
  </div>
  {#if showSingleImage}
    <img src={info.imgs[0]} alt="" class="cell-poster cell-poster-single" />
  {/if}
</section>
