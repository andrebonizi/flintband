<script>
	import Background from './components/Background.svelte';
	import Logo from './components/Logo.svelte';
	import Navbar from './components/Nav.svelte';
	import { Router } from "svelte-routing";
	import Routes from './components/Routes.svelte'

	export let url = "";
	let links = [
		{ link: "/", text: "Home"},
		{ link: "about", text: "About Flint."},
		{ link: "photos", text: "Photos"},
		{ link: "tour", text: "Tour Dates"},
		{ link: "history", text: "History"},
		{ link: "merch", text: "Merch"},
		{ link: "contact", text: "Contact"},
	];

	let mobile = window.matchMedia("(orientation: portrait)").matches ? true : false;
</script>

<div>
<Background />
<Router url="{url}">
	<Navbar links="{links}" mobile={mobile}/>
	{#if mobile}
		<div class="column">
			<Logo mobile={mobile}/>
			<Routes mobile={mobile}/>
		</div>
	{:else}
		<div class="row">
			<Logo mobile={mobile}/>
			<Routes mobile={mobile}/>
		</div>
	{/if}
</Router>

</div>
<style>
	.row{
		display: flex;
		width: 95vw;
		flex-direction: row;
		justify-content: flex-start;
	}
	.column{
		display: flex;
		width: 90vw;
		flex-direction: column;
	}
	div{
		overflow-x: hidden;
	}
</style>