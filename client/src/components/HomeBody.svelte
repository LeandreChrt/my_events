<script>
  import Menu from "./Menu.svelte";
  import DisplayEvents from "./callApi.svelte";
</script>

<main>
  <Menu />
  <h2>Events à venir</h2>
  <div class="events">
    <DisplayEvents />
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
    overflow: scroll;
  }
</style>
