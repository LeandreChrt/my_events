<script>
  let shown = false;
  export function show() {
    shown = true;
  }
  export function hide() {
    shown = false;
  }
</script>

<svelte:window
  on:keydown={(e) => {
    if (e.key === "Escape" && shown === true) {
      hide();
    }
  }}
  on:click={(e) => {
    if (e.target.className.match("modal-wrapper") && shown === true) {
      hide();
    }
  }}
/>
{#if shown}
  <div class="modal-wrapper">
    <div class="modal">
      <span class="close" on:click={() => hide()}>&times;</span>
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal-wrapper {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .modal {
    background-color: white;
    max-width: 30vw;
    padding: 1rem;
    margin: 15% auto;
    border-radius: 30px;
  }
  .close {
    float: right;
    cursor: pointer;
    font-size: 2em;
  }
  .close:hover {
    font-weight: bold;
  }
</style>
