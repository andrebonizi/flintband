<script>
    import {fly } from 'svelte/transition';

    export let mobile;

    let merch = [
        {img: "/media/merch/black_t-shirt01 trans.png", text:"Flint black t-shirt", price: "", link: ""},
        {img: "/media/merch/mug01 transparent.png", text:"Flint mug", price: "", link: ""},
        {img: "/media/merch/Flint tee white transparentl.png", text:"Flint white t-shirt", price: "", link: ""},
        
    ]

</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <p class="title">Products Available</p><hr />
    <div class="container { mobile ? "mobile" : "desktop" }">
        {#each merch as item}
            <div class="product">
                <img width="200" src="{item.img}" alt="{item.text}"/>
            </div>
        {/each}
    </div>
    <div>
        Orders by 
        <a href="mailto:flintbrisbane@gmail.com" >
            Email
        </a>
    </div>
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
        height: 100%;
    }
    .product{
        display: flex;
        padding: 20px 50px;
    }
</style>