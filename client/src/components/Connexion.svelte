<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div>
  <button on:click={() => dispatch("auth")} />
</div>

<style>
  div {
    border: solid 1px black;
  }
  button {
    background-color: black;
    border: none;
    height: 100%;
    width: 50px;
  }
</style>
