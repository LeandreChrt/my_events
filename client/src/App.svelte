<script>
  import Router from "svelte-spa-router";
  import Home from "./components/Home/Home.svelte";
  let routes = {
    "/": Home,
  };
</script>

<nav>
  <a href="#/">Home</a>
</nav>

<main>
  <Router {routes} />
</main>
