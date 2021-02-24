<script>
    import { Link } from "svelte-routing";
    import { fly, slide } from 'svelte/transition';
    import { bounceIn, bounceInOut } from 'svelte/easing';
    export let links;

    let position = 0;

    let mobile = window.matchMedia("(orientation: portrait)").matches ? true : false;
    let active = false;
    function move(node) {
        node.style.left = position-50 +'px';
    }
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"> 
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
            <Link to="{link.link}" on:click={(event)=>position = event.detail.screenX}>
                <div class="link">
                    {link.text}
                </div>
            </Link>
        {/each}
        {#key position}
            <div use:move class="arrow" in:fly={{ x:-100, duration: 200, easing: bounceIn, opacity: 1 }}>
                <div class="bar"></div>
                <div class="edge"></div>
            </div>
        {/key}
    </div>
{/if}
    
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:700&display=swap');

    .link{
        font-family: 'Anton', sans-serif;
        cursor: pointer;
        color: black;
        font-weight: bold;
        font-size: 2.5rem;
        position: relative;
    }
    .mobile-link{
        font-family: 'Anton', sans-serif;
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
        width: 100vw;
        height: 50px;
        box-shadow: 0px 10px 50px black;
        margin-bottom: 80px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 2px 2px 2px grey;
    }
    .arrow{
        width: 50px;
        height: 50px;
        position: absolute;
        margin-top: 130px;
        transition: 200ms;
        display: flex;
        flex-direction: row;
    }
    .edge{
        width: 0; 
        height: 0; 
        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent;
        border-left: 30px solid black;
        border-radius: 20px;
    }
    .bar{
        margin-top: 17px;
        padding: 10px;
        height: 5px;
        background-color: black;
    }
</style>