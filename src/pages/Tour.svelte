<script>
    import { fly } from 'svelte/transition';

    let dates = [
        //{ type: "RELEASE DATE", city: "Fort. Valley",local: "The Foundry", date: "Friday, 23rd of April, 2021", time: "10pm"},
    ]
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="container">
    <div class="title">Dates</div><hr />
    {#each dates as date}
        <div class="date">
            <b>{date.type}</b><br>
            <p>{date.date}</p>
            <p>{date.local} ({date.city}): {date.time}</p>
        </div>
    {/each}
    <p>
        After the launch of the EP Follow the Embers in late July, 2021, Flint is ready to get back on stage....whenever that may be possible.
    </p>

</div>

<style>
    .date{
        display: flex;
        flex-direction: column;
    }
    p{
        font-size: 2rem;
        line-height: 50px;
    }
    b{
        font-size: 2.5rem;
        text-decoration: underline;
    }
    .container{
        padding: 20px;
    }
</style>