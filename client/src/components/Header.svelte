<script>
  import Connexion from "./Connexion.svelte";
</script>

<header>
  <div class="logo" />
  <Connexion on:auth={(e) => console.log(e)} />
</header>

<style>
  .logo {
    width: 50px;
    height: 50px;
    background-color: black;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: black 1 px;
    background-color: red;
  }
</style>
