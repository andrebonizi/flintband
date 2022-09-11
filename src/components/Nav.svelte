<script>
    import { Link } from "svelte-routing";
    import { slide } from 'svelte/transition';

    export let links;
    export let mobile;

    let active = false;

</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Piedra&display=swap" rel="stylesheet">
</svelte:head>

{#if mobile}
    <div on:click={()=>{active=!active}} class="menu-btn">MENU</div>
    {#if active}
        <div class="menu" transition:slide>
            {#each links as link, i}
                <Link to="{link.link}" on:click={()=>active=false}>
                    <div class="mobile-link">
                        {link.text}
                    </div>
                </Link>
            {/each}
        </div>
    {/if}
{:else}
    <div class="header">
        {#each links as link, i}
            <Link to="{link.link}">
                <div class="link">
                    {link.text}
                </div>
            </Link>
            {#if i >= 0 && i < links.length -1 }|{/if}
        {/each}
    </div>
{/if}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=New+Rocker&display=swap');

    @font-face {
        font-family: 'Mistral';
        font-style: normal;
        font-weight: normal;
        src: local('Mistral'), url('/fonts/MISTRAL.woff') format('woff');
    }

    .link{
        font-family: 'Mistral';
        cursor: pointer;
        color: black;
        font-weight: normal;
        font-size: 2.5rem;
        position: relative;
    }
    .mobile-link{
        font-family: 'Mistral';
        cursor: pointer;
        color: black;
        font-weight: bold;
        font-size: 2rem;
        position: relative;
        opacity: 1;
    }
    .menu-btn{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        box-shadow: 0px 10px 20px black;
        text-shadow: 2px 2px 2px grey;
        cursor: pointer;
        border-radius: 20px;
        color: black;
        font-weight: bolder;
        font-size: 2rem;
        margin: 30px;
        padding-right: 20px;
        position: fixed;
        width: 80%;
    }
    .menu{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        margin: auto;
        background: rgba(255,255,255,.7);
        text-shadow: 3px 3px 2px grey;
        padding: 30px;
        top: 81px;
        right: 40px;
        z-index: 1;
        border-radius: 0px 0px 10px 10px;
        box-shadow: 0px 10px 20px black;
    }
    .header{
        width: 90vw;
        height: 50px;
        box-shadow: 0px 10px 50px black;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: bold;
    }
</style>