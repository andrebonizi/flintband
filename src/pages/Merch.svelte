<script>
    import {fly } from 'svelte/transition';

    export let mobile;

    let merch = [
        {img: "/image/merch/black_t-shirt01.png", text:"Flint black t-shirt", price: "", link: ""},
        {img: "/image/merch/mug01.png", text:"Flint mug", price: "", link: ""},
        {img: "/image/merch/white_t-shirt01.png", text:"Flint white t-shirt", price: "", link: ""},
        
    ]

</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <b>PRODUCTS AVAILABLE</b><hr />
    <div class="container { mobile ? "mobile" : "desktop" }">
        {#each merch as item}
            <img width="200" src="{item.img}" alt="{item.text}"/>
        {/each}
    </div>
    <!-- <div>
        <b>SONGS AVAILABLE</b><hr />
        Colours<br>
        Wide Awake<br>
        Serenity<br>
    </div> -->
</div>

<style>
    div{
        font-size: 2rem;
        text-align: center;
    }
    .container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .desktop{
        flex-direction: row;
    }
    .mobile{
        flex-direction: column;
    }
    img{
        height: max-content;
    }
</style>