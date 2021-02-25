<script>
    export let photos = [];
</script>
<div>
    <p>
        Photos
    </p>
    <hr />
    {#each photos as photo}
        <p>{photo.src}</p>
    {/each}
</div>