<script>
    import { fly } from 'svelte/transition'; 
    import Logo from '../components/Logo.svelte';
    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    {#if mobile}
        <img src="image/photos/0.jpg" alt="Flint" />
    {/if}
    <div class="content">
        <div class="flint">Flint.</div> is a Brisbane-based band that want to be heard.
        <br><br>
        Our sound speaks for itself.
        <br>
    </div>
</div>

<style>
    @font-face {
        font-family: 'Mistral';
        font-style: normal;
        font-weight: normal;
        src: local('Mistral'), url('/fonts/MISTRAL.woff') format('woff');
    }

    .content{
        padding-top: 100px;
        text-align: center;
        font-size: 2rem;
        line-height: 50px;
    }
    img{
        width: 100%;
    }

    .flint{
        display: inline;
        font-family: 'Mistral';
        padding: 0;
        margin: 0;
        font-size: 3rem;
    }
</style>