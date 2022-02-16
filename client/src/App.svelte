<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Home from "./components/Home/Home.svelte";
</script>

<Router>
	<header>
		<h1>Svelte</h1>

		<nav>
			<Link to="/">Home</Link>
			<Link to="test">Test</Link>
		</nav>
	</header>

	<main>
		<Route path="/" primary={false}>
			<Home />
		</Route>
		<Route path="test">
			<h1>Home</h1>
		</Route>
		
	</main>
</Router>
