<script>
    import { fly } from 'svelte/transition';

    let dates = [
        { 
            type: "Heat 5 of the Battle of the Bands",
            city: "Fortitude Valley",
            local: "Brightside",
            date: "Wednesday, Dec. 15th",
            picture: ""
        },
        {
            type: "Right Up Santa’s Pole",
            city: "Fortitude Valley",
            local: "O'Skulligans",
            date: "Thursday, Dec. 16th",
            picture: ""
        },
        {
            type: "Battle of the Bands, sponsored by Bundaberg rum",
            city: "Murrarie",
            local: "Queensport Tavern",
            date: "Saturday, Dec. 18th",
            picture: ""
        },
    ]
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="container">
    <div class="title"><p class="flint">Flint.</p> are playing three gigs in December</div>
    <hr/><hr/>
    {#each dates as date}
        <b>{date.type}</b>
        <div class="content">
            <p class="date">{date.date} </p>
            <p> at {date.local} in {date.city}</p>
        </div>
        <!-- <div class="image">
            <img src={date.picture} alt="flyer"/>
        </div> -->
        <hr/>
    {/each}
    <hr/>
</div>

<style>
    .content{
        display: flex;
        flex-direction: column;
    }
    .date{
        font-weight: bolder;
    }
    p{
        font-size: 1rem;
        line-height: 20px;
    }
    b{
        font-size: 2rem;
        text-decoration: underline;
    }
    .container{
        padding: 20px;
    }
    .flint{
        display: inline;
        font-family: 'Mistral';
        padding: 0;
        margin: 0;
        font-size: 4rem;
    }
</style>