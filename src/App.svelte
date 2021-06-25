<script>
	import Background from './components/Background.svelte';
	import Logo from './components/Logo.svelte';
	import Navbar from './components/Nav.svelte';
	import Footer from './components/Footer.svelte';
	import { Router } from "svelte-routing";
	import Routes from './components/Routes.svelte';

	export let url = "";
	let links = [
		{ link: "/", text: "Home"},
		{ link: "about", text: "About Flint."},
		{ link: "music", text: "Music"},
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
			<div class="container">
				<Routes  mobile={mobile}/>
			</div>
		</div>
	{:else}
		<div class="row">
			<Logo mobile={mobile}/>
			<div class="container">
				<Routes mobile={mobile}/>
			</div>
		</div>
	{/if}
</Router>
<Footer />
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
		width: 95vw;
		flex-direction: column;
	}
	.container{
		border-radius: 20px;
		background-color: rgba(255,255,255,.5);
		width: 100%;
	}
</style>