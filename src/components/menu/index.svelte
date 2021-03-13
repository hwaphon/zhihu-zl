<script>
  export let list = [];
  export let active = 0;

  const select = (index) => {
    if (active === index) return;

    active = index;
  }

</script>

<style type="text/scss">
  @import "./index.scss";
</style>

<section class="menu">
  {#each list as item, index}
    <p
      key={item.id}
      class="menu-item"
      class:menu-item-selected={active === index}
      on:click={() => select(index)}>
      {item.name}
    </p>
  {/each}
</section>
