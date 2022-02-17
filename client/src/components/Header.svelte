<script>
  import Connexion from "./Connexion.svelte";
</script>

<header>
  <a href="#/" class="logo">logo</a>
  <Connexion />
</header>

<style>
  header {
    margin: auto;
  }

  .logo {
    width: 50px;
    height: 50px;
    background-color: black;
    color: white;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: black 1 px;
    background-color: red;
  }
</style>
