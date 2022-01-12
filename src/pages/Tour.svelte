<script>
    import { fly } from 'svelte/transition';

    let dates = [
        {
            type: "Ric's Cafe! Jam in Jan",
            local: "Ric's Cafe -Bar",
            date: "Thursday, Jan. 13th - 7:30pm",
            picture: "/media/tour/Ric's Jan 13.jpg",
        },
        {
            type: "Battle of the Bands, sponsored by Bundaberg rum",
            city: "Murrarie",
            local: "Queensport Tavern",
            date: "Saturday, Dec. 18th",
            picture: "/media/tour/Battle of the Bands Queensport.png",
            link: "https://www.facebook.com/qptavern",
        },
        {
            type: "Right Up Santa’s Pole",
            city: "Fortitude Valley",
            local: "O'Skulligans",
            date: "Thursday, Dec. 16th",
            picture: "/media/tour/Poster Dec 16.jpg",
            link: "https://www.eventbrite.com.au/e/right-up-santas-pole-with-the-subject-to-change-flint-and-dead-dirty-dinos-tickets-216590507037",
        },
        { 
            type: "Heat 5 of the Battle of the Bands",
            city: "Fortitude Valley",
            local: "Brightside",
            date: "Wednesday, Dec. 15th",
            picture: "/media/tour/Heat 5 Brightside.png",
            link: "https://www.facebook.com/events/305224324599605/?ref=newsfeed",
        },
        
        
    ]
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="container">
    <div class="title"><p class="flint">Flint.</p> are playing three gigs in December!</div>
    <hr/>
    {#each dates as date}
    <hr/>
    <div class="content">
        <b>{date.type? date.type : ''}</b>
        <div>
            <div class="image">
                <a href="{date.link? date.link : ''}" target="_blank">
                    <img src={date.picture} alt="flyer"/>
                </a>
            </div>
            <div class="info">
                <p class="date">{date.date} </p>
                <p> at {date.local} {date.city? ' - '+date.city : ''}</p>
            </div>
        </div>
    </div>
    {/each}
</div>

<style>
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .date{
        font-weight: bolder;
    }
    p{
        font-size: 1rem;
        line-height: 15px;
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
    img {
        width: 100%;
    }
</style>