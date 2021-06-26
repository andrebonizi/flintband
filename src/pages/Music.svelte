<script>
    import { fly } from 'svelte/transition';

    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <div class="info">
        Click on preferred link to listen to the song or see the video.
    </div>
    <div  class="{ mobile ? "mobile": "desk"}">
        <div class="single">
            <img src="image/covers/embers.png" alt="embers album cover" />
            <div class="links">
                <a href="https://flintbrisbane.bandcamp.com/album/follow-the-embers-ep">
                    <img class="icon" src="image/icons/bandcamp_extended.png" alt="bandcamp icon" />
                </a>
                <a href="https://soundcloud.com/flint-band/sets/flint-follow-the-embers/s-5F0R4u8VlnH">
                    <img class="icon" src="image/icons/soundcloud_extended.png" alt="soundcloud icon" />
                </a>
            </div>
            <div>
                Follow the Embers is Flint.’s first
                EP, out late July this year.
            </div>
        </div>
        <div class="single">
            <img src="image/covers/colours.png" alt="colours album cover" />
            <div class="links">
                <a href="https://www.youtube.com/watch?v=HzLb7Dl5bag&ab_channel=Flint" target="_blank">
                    <img class="icon" src="image/icons/youtube_extended.png" alt="youtube icon" />
                </a>
                <a href="https://flintbrisbane.bandcamp.com/track/colours" target="_blank">
                    <img class="icon" src="image/icons/bandcamp_extended.png" alt="bandcamp icon" />
                </a>
                <a href="https://soundcloud.com/flint-band/colours/s-ndR82NmrAr3" target="_blank">
                    <img class="icon" src="image/icons/soundcloud_extended.png" alt="soundcloud icon" />
                </a>
            </div>
            <div>
                Colours begins with a sparkley guitar
                to ease into the mood, lifts your
                spirit in the chorus, and finishes big
                when All The Colours Blend Into One.
            </div>
        </div>
    </div>
</div>
<style>
    .desk{
        font-size: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: auto 20px;
    }
    .mobile{
        font-size: 2rem;    
        text-align: center;
    }
    img{
        width: 100%;
    }
    .single{
        margin: 20px 50px;
        width: 250px;
    }
    .single > div{
        font-size: 1rem;
    }
    .icon{
        width: 50px;
        margin: 10px;
        border-radius: 5px;
    }
    div.highlight{
        display: inline;
        font-size: 2rem;
    }
    .links{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }
    .info{
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>