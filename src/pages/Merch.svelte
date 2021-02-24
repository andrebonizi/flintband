<script>
    let merch = [
        {img: "", price: "", link: ""}
    ]

</script>

<div>
    {#each merch as item}
        <div>{item.img}</div>
        <div>{item.price}</div>
        <div>{item.link}</div>
    {/each}
</div>