<script>
	import Background from './components/Background.svelte';
	import Logo from './components/Logo.svelte';
	import Navbar from './components/Nav.svelte';
	import { Router } from "svelte-routing";
	import Routes from './components/Routes.svelte'

	export let url = "";
	let links = [
		{ link: "about", text: "About Flint"},
		{ link: "videos", text: "Videos"},
		{ link: "photos", text: "Photos"},
		{ link: "tour", text: "Tour Dates"},
		{ link: "merch", text: "Merch"},
		{ link: "contact", text: "Contact"},
	];

</script>

<Background />
<Router url="{url}">
	<Navbar links="{links}" />
	<div class="container">
		<Logo />
		<Routes />
	</div>
</Router>
<p>
</p>

<style>
	.container{
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
	}
</style>