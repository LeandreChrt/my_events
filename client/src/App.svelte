<script>
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import Home from "./components/Home.svelte";

  let routes = {
    "/": Home,
  };
</script>

<Header />

<nav>
  <a href="#/">Home</a>
</nav>

<main>
  <Router {routes} />
</main>
