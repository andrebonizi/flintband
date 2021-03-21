<script>
    import { fly } from 'svelte/transition'; 
    import Logo from '../components/Logo.svelte';
    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    {#if mobile}
        <Logo />
    {/if}
    <p>
        Flint is a Brisbane based band that want to be heard.
        <br><br>
        Our sound speaks for itself.
        <br>
    </p>
</div>

<style>
    p{
        text-align: center;
        font-size: 1.5rem;
        line-height: 50px;
    }
</style>