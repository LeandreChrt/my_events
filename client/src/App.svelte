<script>
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import HomeBody from "./components/HomeBody.svelte";
  import LostPage from "./components/404.svelte";

  let routes = {
    "/": HomeBody,
    "*": LostPage,
  };
</script>

<Header />
<Router {routes} />
