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
        font-family: 'New Rocker', sans-serif;
        cursor: pointer;
        color: black;
        font-weight: bold;
        font-size: 2rem;
        position: relative;    
    }
    .menu-btn{
        display: flex;
        justify-content: center;
        box-shadow: 0px 10px 20px black;
        text-shadow: 2px 2px 2px grey;
        cursor: pointer;
        border-radius: 20px;
        background-color: rgba(0, 0, 255, 0.2);
        color: black;
        font-weight: bolder;
        font-size: 2rem;
        margin: 30px;
    }
    .menu{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header{
        width: 90vw;
        height: 50px;
        box-shadow: 0px 10px 50px black;
        margin-bottom: 20px;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: bold;
        /* text-shadow: 2px 2px 2px grey; */
    }
</style>