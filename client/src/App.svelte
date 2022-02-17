<script>
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import HomeBody from "./components/HomeBody.svelte";

  let routes = {
    "/": HomeBody,
  };
</script>

<Header />
<Router {routes} />
