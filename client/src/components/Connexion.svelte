<script>
  //   import { createEventDispatcher } from "svelte";
  import AuthModal from "./AuthModal.svelte";
  //   const dispatch = createEventDispatcher();

  let modal;
</script>

<div>
  <button
    on:click={() => {
      modal.show();
    }}
  />
</div>

<AuthModal bind:this={modal}>
  <h1>coucou</h1>
</AuthModal>

<style>
  button {
    background-color: black;
    border: none;
    height: 100%;
    width: 50px;
  }

  button:hover {
    border-radius: 30%;
  }
</style>
