<script>
  import Menu from "./Menu.svelte";
</script>

<main>
  <Menu />
  <div class="events">
    <h2>Events à venir</h2>
  </div>
</main>

<style>
  main {
    display: flex;
    width: 100%;
    height: 100%;
    background: blue;
    color: white;
  }
  .events {
    padding: 1em;
  }
</style>
