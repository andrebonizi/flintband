<script>
    let dates = [
        { city: "City",local: "Place", date: "Date"},
    ]
</script>

<div>
    <p>Tour Dates</p><hr />
    {#each dates as date}
        <div class="date">
            <p>{date.city}</p>
            <p>{date.local}</p>
            <p>{date.place}</p>
        </div>
    {/each}

</div>

<style>
    .date{
        display: flex;
        flex-direction: column;
    }
</style>