<script>
    import { fly } from 'svelte/transition';

    let dates = [
        { type: "RELEASE DATE", city: "Fort. Valley",local: "The Foundry", date: "Friday, 23rd of April, 2021", time: "10pm"},
    ]
</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <p>Dates</p><hr />
    {#each dates as date}
        <div class="date">
            <b>{date.type}</b><br>
            <p>{date.date}</p>
            <p>{date.local} ({date.city}): {date.time}</p>
        </div>
    {/each}

</div>

<style>
    .date{
        display: flex;
        flex-direction: column;
    }
    p{
        font-size: 2rem;
        line-height: 2rem;
    }
    b{
        font-size: 2.5rem;
        text-decoration: underline;
    }
</style>