<script>
    let dates = [
        { city: "City",local: "Place", date: "Date"},
    ]
</script>

<div>
    {#each dates as date}
        <div class="date">
            <div>{date.city}</div>
            <div>{date.local}</div>
            <div>{date.place}</div>
        </div>
    {/each}

</div>

<style>
    .date{
        display: flex;
        flex-direction: column;
    }
</style>