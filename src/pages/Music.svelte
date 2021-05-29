<script>
    import { fly } from 'svelte/transition';

    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <div class="info">
        Coming soon...
    </div>
    <div  class="{ mobile ? "mobile": "desk"}">
        <img src="image/covers/embers.png" alt="embers album cover" />
        <img src="image/covers/colours.png" alt="colours album cover" />
    </div>
</div>
<style>
    .desk{
        font-size: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: auto 20px;
    }
    .mobile{
        font-size: 2rem;    
        text-align: center;
    }
    img{
        width: 250px;
        margin: 20px 50px;
    }
    .info{
        font-size: 2rem;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>