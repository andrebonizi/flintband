<script>
    import { Route } from "svelte-routing";
    import Home from '../pages/Home.svelte';
	import Videos from '../pages/Videos.svelte';
	import Photos from '../pages/Photos.svelte';
	import Contact from '../pages/Contact.svelte';
	import Merch from '../pages/Merch.svelte';
    import Tour from '../pages/Tour.svelte';
    import About from '../pages/About.svelte';
    import History from '../pages/History.svelte';

    export let mobile;
</script>

<div>
    <Route path="about" component="{About}" mobile={mobile}/>
    <Route path="videos" component="{Videos}" />
    <Route path="photos" component="{Photos}" mobile={mobile}/>
    <Route path="contact" component="{Contact}" />
    <Route path="merch" component="{Merch}" mobile={mobile}/>
    <Route path="history" component="{History}" />
    <Route path="tour" component="{Tour}" />
    <Route path="/"><Home /></Route>
</div>

<style>
    div{
        color: black;
    }
</style>