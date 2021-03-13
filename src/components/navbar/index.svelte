<script>
  export let title = "";
</script>

<style type="text/scss">
  @import "./index.scss";
</style>

{#if title}
  <header>{title}</header>
{/if}
